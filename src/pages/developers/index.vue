<template>
    <div>
        <app-meta 
            :cb-title="'Developer Center - Chargebee'" 
            :cb-desc="'Work with our robust APIs and SDKs to build recurring genius, and remarkable experiences, right inside your app.'" 
            :cb-url="'/developers/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js,/static/website/version/scripts/product.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <div class="flexrow mobile-menu--expanded">
                <div class="mobile-menu__close" id="close-mobile-menu" onclick="hideMobileNav()">
                    <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
                </div>
                <a class="menu-items" href="/subscription-management/">
                    Subscription
                    <br />Management
                </a>
                <a class="menu-items" href="/recurring-billing-invoicing/">
                    Billing
                    <br /> & Invoicing
                </a>
                <a class="menu-items" href="/recurring-payments/">
                    Payments
                    <br /> & Invoicing
                </a>
                <a class="menu-items" href="/saas-reporting/">
                    Reporting
                    <br /> & Analytics
                </a>
                <a class="menu-items" href="/recurring-payments/">
                    Payment
                    <br />Gateways
                </a>
                <a class="menu-items" href="/developers/">
                    For
                    <br /> developers
                </a>
            </div>
            <section class="pWrap">
                <div class="pWrap__greybox">
                    <div class="p-carousel carousel slide container" data-wrap="false" id="p-carousel" data-interval="false">
                        <a href="/recurring-payments/" class="p-carousel__arrow--left hidden-xs hidden-sm" role="button">
                            <!--<?xml version="1.0" encoding="UTF-8"?>-->
                            <svg width="24px" height="14px" viewBox="0 0 24 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="mockup-for-html" transform="translate(-60.000000, -259.000000)">
                                        <g id="banner" transform="translate(0.000000, 90.000000)">
                                            <polygon id="Rectangle-3-Copy" fill="#F0F0F5" points="1.13686838e-13 1.70530257e-13 1440 1.70530257e-13 1440 466 0 466"></polygon>
                                            <g id="Group-9" transform="translate(42.000000, 99.000000)" fill="#B4B4BE">
                                                <g id="Long-Arrow-Right-Copy" transform="translate(30.000000, 77.000000) scale(-1, 1) translate(-30.000000, -77.000000) translate(18.000000, 70.000000)">
                                                    <polygon id="Shape" points="17.1875 0.282751335 15.78125 1.72792482 20.0625 6.03202847 0 6.03202847 0 8.04270463 20.0625 8.04270463 15.78125 12.3468083 17.1875 13.7919818 23.1875 7.75995329 23.90625 7.03736655 23.1875 6.3147798"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="/subscription-management/" class="p-carousel__arrow--right hidden-xs hidden-sm" role="button">
                            <!--<?xml version="1.0" encoding="UTF-8"?>-->
                            <svg width="24px" height="14px" viewBox="0 0 24 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="mockup-for-html" transform="translate(-60.000000, -259.000000)">
                                        <g id="banner" transform="translate(0.000000, 90.000000)">
                                            <polygon id="Rectangle-3-Copy" fill="#F0F0F5" points="1.13686838e-13 1.70530257e-13 1440 1.70530257e-13 1440 466 0 466"></polygon>
                                            <g id="Group-9" transform="translate(42.000000, 99.000000)" fill="#B4B4BE">
                                                <g id="Long-Arrow-Right-Copy" transform="translate(30.000000, 77.000000) scale(-1, 1) translate(-30.000000, -77.000000) translate(18.000000, 70.000000)">
                                                    <polygon id="Shape" points="17.1875 0.282751335 15.78125 1.72792482 20.0625 6.03202847 0 6.03202847 0 8.04270463 20.0625 8.04270463 15.78125 12.3468083 17.1875 13.7919818 23.1875 7.75995329 23.90625 7.03736655 23.1875 6.3147798"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <div class="carousel-inner p-carousel__inner animated" role="listbox">
                            <div class="p-carousel__content item active animated">
                                <div class="p-carousel__label">Developer Resources</div>
                                <h1 class="p-carousel__title">
                                    Work with our robust APIs and SDKs <br />to build recurring genius.
                                </h1>
                                <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                                    Sign up for free
                                </a>
                                <span class="p-carousel__signup-subtext">
                                    <a href="/schedule-a-demo/" class="btn-flat btn-flat__alter" style="font-weight: normal;">Schedule a Demo</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="container container--offset">
                    <!-- blue navbar -->
                    <div class="p-menu-parent">
                        <div class="hidden-sm hidden-xs">
                            <div class="p-menu animated" id="p-menu-fixed">
                                <div class="p-menu__container">
                                    <a href="/" class="p-menu__logo">
                                        <img src="/static/resources/brand/chargebee-icon-black.svg" alt="Chargebee Logo" width="30">
                                    </a>
                                    <div class="p-menu__content">
                                        <a href="/subscription-management/" class="p-menu__tab">
                                            Subscription<br />
                                            Management
                                        </a>
                                        <a href="/recurring-billing-invoicing/" class="p-menu__tab">
                                            Billing <br />
                                            & Invoicing
                                        </a>
                                        <a href="/recurring-payments/" class="p-menu__tab">
                                            Payments <br />
                                            & Accounting
                                        </a>
                                        <a href="/saas-reporting/" class="p-menu__tab">
                                            Reporting <br />
                                            & Analytics
                                        </a>
                                        <a href="/recurring-payments/" class="p-menu__tab">
                                            Payment <br />
                                            Gateways
                                        </a>
                                        <a href="/developers/" class="p-menu__tab p-menu__tab--active">
                                            Developer <br />
                                            Resources
                                        </a>
                                    </div>
                                    <div class="p-menu__action">
                                        <a cn-mark-signup="true" href="/trial-signup/" class="p-menu__signup">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="visible-xs visible-sm">
                            <div class="p-menu p-menu--mobile">
                                <div class="selected-menu" id="selected-menu">
                                    For
                                    <br /> developers
                                </div>
                                <div class="show-menu" id="show-menu">
                                    <img src="/static/website/version/images/product/icon/mobile-menu-group.svg" width="28px" height="28px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gaussian-blur"></div>
                    <div class="loading-bar">Loading..</div>
                    <section id="main-container">
                        <!-- Main content -->
                        <section class="main-content main-content--border">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">
                                    <h2 class="main-content__title">
                                        API Reference
                                    </h2>
                                    <p class="main-content__text">
                                        Getting your subscription business up and running with Chargebee is a breeze with our sleek and powerful API. 
                                    </p>
                                    <a href="https://apidocs.chargebee.com/docs/api" class="main-content__more main-content__more--set-width">Jump right in into API Docs</a>
                                </div>
                            </div>
                            <div class="whitespace-md"></div>
                            <div class="">
                                <div class="api-preview">
                                    <!-- Nav tabs -->
                                    <ul class="nav nav-tabs api-preview__nav" role="tablist">
                                        <li role="presentation" class="active">
                                            <a href="#curl" aria-controls="net" role="tab" data-toggle="tab">
                                                CURL
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#php" aria-controls="php" role="tab" data-toggle="tab">
                                                PHP
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#ruby" aria-controls="ruby" role="tab" data-toggle="tab">
                                                RUBY
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#python" aria-controls="python" role="tab" data-toggle="tab">
                                                PYTHON
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#java" aria-controls="java" role="tab" data-toggle="tab">
                                                JAVA
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#net" aria-controls="net" role="tab" data-toggle="tab">
                                                .NET
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#node" aria-controls="node" role="tab" data-toggle="tab">
                                                NODE
                                            </a>
                                        </li>
                                    </ul>

                                        <!-- Tab panes -->
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="curl">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-sh">
curl  https://supercharge-test.chargebee.com/api/v1/subscriptions \
    -u test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj: \
    -d customer[email]="john@user.com" \
    -d customer[first_name]="John" \
    -d customer[last_name]="Doe" \
    -d customer[phone]="+1-949-999-9999" \
    -d plan_id="spacebox-spaceplan-10-boxes" \
    -d plan_quantity="5"
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="php">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-php">
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
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="ruby">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-ruby">
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
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="python">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-py">
chargebee.configure("test_XFZWh2otngDtKBLglQfqknrrTVcuft7Mj", "supercharge-test")
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
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="java">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-java">
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
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="net">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-cs">
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
        </pre>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="node">
    <div class="api-preview__block">
        <pre class="api-preview__pre prettyprint lang-js">
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
        </pre>
    </div>
</div>
</div>
                                </div>
                            </div>
                        </section>

                        <section class="main-content main-content--no-mob-margin">
                            <div class="row">
                                <div class="main-content__l-section col-md-5">                            
                                    <div class="whitespace-md visible-sm visible-xs"></div>
                                    <h2 class="main-content__title">
                                        Client libraries
                                    </h2>
                                    <p class="main-content__text">
                                        It’s not a good feeling to be lost in translation. That’s why Chargebee supports a number of client libraries for you to work with.
                                    </p>
                                    <div class="whitespace"></div>
                                    <section class="main-content__feature">
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">.Net</span>
                                        </div>
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">PHP</span>
                                        </div>
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">Ruby</span>
                                        </div>
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">Node.js</span>
                                        </div>
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">Python</span>
                                        </div>
                                        <div class="main-content__feature__block">
                                            <span class="yellow-highlight">Java</span>
                                        </div>
                                    </section>
                                </div>
                                <div class="main-content__l-section col-md-5 col-md-push-2">
                                    <div class="whitespace-lg visible-sm"></div>
                                    <div class="whitespace-md visible-xs"></div>
                                    <h2 class="main-content__title">
                                        API integration tutorials
                                    </h2>
                                    <p class="main-content__text">
                                        Need results fast? Chargebee’s integration tutorials will help you work some API magic. 
                                    </p>
                                </div>
                            </div>
                            <div class="main-content__new-feature-msg flexrow--margin">
                            <a href="https://apidocs.chargebee.com/docs/api#pagination_and_filtering" style="color:inherit;">
                                <span class="new-label">
                                    New
                                </span>
                                <span class="new-feature-msg__content">
                                    <span>You can now Filter and Sort the results of your 'list' API requests.</span> <span style="margin:0;" class="main-content__more">&nbsp;</span>
                                </span>
                                </a>
                            </div>
                        </section>

                        <section class="testimonial-box hidden-xs hidden-sm flexrow--margin">
                            <div class="row flexrow flexrow--end">
                                <div class="testimonial-box__img-holder">
                                    <img src="/static/website/version/images/customers/testimonial/vmp-team.png" class="img-responsive" />
                                </div>
                                <div class="testimonial-box__logo-holder">
                                    <img src="/static/website/version/images/customers/testimonial/vmp-logo.png" width="79" />
                                    <a href="/blog/vmp-case-study/" class="testimonial-box__logo-holder__link" style="margin-bottom: 0;">
                                        Read this case study on how Chargebee powers Vinyl Me, Please
                                    </a>
                                </div>
                            </div>
                            <div class="blue-msg-box blue-msg-box--vmp animated">
                                <h2 class="blue-msg-box__msg">
                                    Chargebee has been great to work with. They’ve helped us grow our business tremendously. They’re always quick to respond and open to feedback. That’s rare in my experience.
                                </h2>
                                <span class="blue-msg-box__author">Matt Fiedler, Founder</span>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <!-- End Main Body Content -->            
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
        methods: {

        },
        created() {

        },
        mounted() {
            $('.pr-tab__plan-inv').tooltip({
                'show': true,
                'placement': 'bottom'
            });
        }
    }
</script>

<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
    .pWrap .p-carousel__content{
        height: 410px;
    }
    .pWrap .p-carousel__label {
        background: transparent;
        box-shadow: none;
        border-radius: 1px;
        font-weight: normal;
        font-size: 15px;
        color: #787882;
        padding: 0;
        display: inline-block;
    }
    .pWrap .p-carousel__title {
        font-family: acumin-pro,helvetica,sans-serif;
        font-size: 32px;
        letter-spacing: -1px;
        line-height: 40px;
        color: #212128;
        margin-bottom: 20px;
        text-transform: none;
        min-height: 100px;
        margin-top: 10px;
    }
    .pWrap .p-carousel__signup-button {
        border: 0;
        font-family: inherit;
        min-width: inherit;
        transition: 400ms;
        background-color: #FF7846;
        color: #fff;
        font-size: 15px;
        text-align: center;
        padding: 9px 21px;
        display: inline-block;
        border-radius: 2px;
    }
    .pWrap .p-menu__tab {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        padding: 24px 12px;
        transition: 350ms;
        position: relative;
    }
    .pWrap .main-content__title {
        font-size: 18px;
        color: #212128;
        line-height: 24px;
        margin-top: 0;
        margin-bottom: 15px;
        text-transform: none;
    }
    @media screen and (min-width:1200px) {
        .pWrap .main-content{
            padding: 60px 100px 0 100px;
        }
        .pWrap .main-content__title {
            font-size: 18px;
            color: #212128;
            line-height: 24px;
            text-transform: none;
            margin-bottom: 5px;
            padding-top: 0px;
            margin-top: 0px;
        }
    }
    @media screen and (max-width: 767px) {
        .pWrap .main-content{
            margin-top: 0;
        }
        .pWrap .p-carousel__title {
            font-size: 26px;
            line-height: 32px;
            letter-spacing: -0.5px;
            min-height: inherit;
        }
    }
</style>