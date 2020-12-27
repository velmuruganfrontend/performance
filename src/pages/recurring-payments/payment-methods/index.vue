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
      :cb-title="'Accept recurring payments via multiple online and offline payment methods with Chargebee'" 
      :cb-desc="'Process payments globally with a variety of payment methods-credit card, PayPal, Amazon Pay, Stripe, ACH and more.'" 
      :cb-url="'/recurring-payments/payment-methods/'" 
      :cb-image="''"
      :cb-style="' /static/website/version/styles/common.css'"
      :cb-head-script="''"
      :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="true" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <main class="cc-main">
        <!-- ===============================================================
        Start: Hero
        ================================================================ -->
        <section class="l-row l-row--hero" style="background-color: #00001E;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div class="cc-hero">
                            <div class="cc-hero__header">
                                <h1 class="cc-hero__title">
                                    Enable Multiple Online and Offline <br class="visible-md visible-lg">Payment Methods for Your Customers 
                                </h1>
                                <p class="cc-hero__desc">
                                    Increase your global footprint. Boost conversions of new customers and retain existing customers. Reach a broader audience with their choice of payment options- credit cards, digital wallets, direct debit, and offline payments.
                                </p>
                            </div>
                            <div class="cc-hero__actions">
                                <div class="cc-hero__action">
                                    <a href="/trial-signup/?ref=PMheroCTA" class="cc-btn">Try Chargebee for free</a>
                                </div>
                                <div class="cc-hero__action">
                                    <a href="/schedule-a-demo/?ref=PMheroCTA" class="cc-link cc-link--white">Schedule a Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Hero
        ================================================================ -->
        <!-- ===============================================================
        Start: icon
        ================================================================ -->
        <section class="l-row l-row--icon" >
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-md-10 text-center col-sm-offset-1 col-md-offset-1">
                       <div class="row">
                            <div class="cc-medias">
                                <div class="col-xs-6 ccc-medias text-center">
                                    <div id="cc-js-ocp" class="cc-media first">
                                        <div class="cc-media__icon">
                                            <img src="/static/website/version/images/recurring-payments/payment-methods/icon/online-card.svg" alt="Chargebee Online Card Payments" class="img-responsive">
                                        </div>
                                        <div class="cc-media__text">
                                            Online Card <br class="hidden-xs">Payments
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 ccc-medias text-center">
                                    <div id="cc-js-bb" class="cc-media first">
                                        <div class="cc-media__icon"> 
                                            <img src="/static/website/version/images/recurring-payments/payment-methods/icon/bank-based-payments.svg" alt="Chargebee Bank based Payments" class="img-responsive">
                                        </div>
                                        <div class="cc-media__text">
                                            Bank based <br class="hidden-xs">Payments
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 ccc-medias text-center">
                                    <div id="cc-js-dd" class="cc-media"> 
                                        <div class="cc-media__icon"> 
                                            <img src="/static/website/version/images/recurring-payments/payment-methods/icon/direct-debit-payment.svg" alt="Chargebee Direct Debit" class="img-responsive" style="width: 45px">  
                                        </div>
                                        <div class="cc-media__text">
                                            Direct Debit
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 ccc-medias text-center">
                                    <div id="cc-js-op" class="cc-media">
                                        <div class="cc-media__icon">
                                            <img src="/static/website/version/images/recurring-payments/payment-methods/icon/offline-payment.svg" alt="Chargebee Offline Payments" class="img-responsive">
                                        </div>
                                        <div class="cc-media__text">
                                            Offline <br class="hidden-xs">Payments
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 ccc-medias text-center">
                                    <div id="cc-js-dw" class="cc-media">
                                        <div class="cc-media__icon">
                                            <img src="/static/website/version/images/recurring-payments/payment-methods/icon/digital-wallet.svg" alt="Chargebee Digital Wallets" class="img-responsive" width="30">
                                        </div>
                                        <div class="cc-media__text">
                                            Digital Wallets
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: icon
        ================================================================ -->
        <!-- ===============================================================
        Start: Content 1
        ================================================================ -->
        <section class="l-row" id="online-card-payment">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="cc-article">
                            <h2 class="cc-article__title">
                                Online Card Payments
                            </h2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="cc-article">
                            <div class="cc-article__header">
                                <div class="cc-article__heading">
                                    With instant authorization and quick settlement times, payments via cards are an easy way to grow your customer base. 
                                </div>
                                <p class="cc-article__desc">
                                    Globally accepted, most B2B plus B2C small and medium businesses profit from processing online card payments.
                                </p>
                                <p class="cc-article__desc">
                                    Choose from Stripe, Checkout, and <a class="cc-link" href="/recurring-payments/"> 23+ other payment gateways</a> in over 50 countries. Use multiple payment gateways or switch gateways easily. Process recurring card payments from Visa, MasterCard, American Express, Discover, JCB and Diners Club with Chargebee.
                                </p>
                            </div>
                            <div class="cc-article__figure">
                                <img src="/static/website/version/images/recurring-payments/payment-methods/online-card-payments.png" alt="Chargebee Online Card Payments" width="390" class="img-responsive">
                            </div>
                            <div class="cc-article__action">
                                <a href="/recurring-payments/recurring-credit-card-payments/" class="cc-link cc-link--icon">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 1
        ================================================================ -->
        <!-- ===============================================================
        Start: Billing
        ================================================================ -->
        <!-- <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
                        <a href="/payment-gateways/stripe/" class="cc-glow">
                            <div class="cc-glow__icon">
                                <img src="/static/website/version/images/home/jan-2019/customers/chargebee-stripe-billing-payments.png" alt="Chargebee Stripe Billing Payments" class="img-responsive" width="62">
                            </div>
                            <div class="cc-glow__content">
                                Thousands of businesses use Chargebee to <span class="cc-link cc-link--icon"><br class="visible-sm">do more with Stripe</span>
                            </div>
                        </a>


                        <div class="cc-slider cc-slider--billing">
                            <div class="cc-slider__figure">
                                <section class="customer-logos customer-logos__two slider">
                                    <div class="slide">
                                        <div class="braintree_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="gocardless_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="paypal_bg"></div>
                                    </div>
                                    <div class="slide">
                                        <div class="worldpay_bg"></div>
                                    </div>
                                </section>
                            </div>
                            <div class="cc-slider__content" style="font-size: 14px; color: #242438; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;">
                                23+ other payment gateways in 50 countries  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- ===============================================================
        End: Billing
        ================================================================ -->

         <!-- ===============================================================
        Start: Content 4
        ================================================================ -->
        <section class="l-row" id="bank-based-payments">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="cc-article">
                            <h2 class="cc-article__title">
                                Bank-based Payments
                            </h2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="cc-article">
                            <div class="cc-article__header">
                                <div class="cc-article__heading">
                                    Give customers the ease of making payments directly from their bank accounts
                                </div>
                                <p class="cc-article__desc">
                                    Local payment methods that work directly with a customer’s bank account are the most popular payment methods in Europe. Chargebee lets you expand deeper into the European market by offering support for payment methods highly popular in each country. The best part is that you can convert one-time direct bank payments into recurring payments through SEPA.
                                </p>

                                <!-- <ul class="cc-article__list">
                                    <li class="cc-article__item">
                                        Win customers in the Netherlands by accepting online banking payments through the iDEAL network of Dutch banks
                                    </li>
                                    <li class="cc-article__item">
                                        Open up to customers in Belgium by accepting Bancontact debit cards
                                    </li>
                                     <li class="cc-article__item">
                                        Get access to customers across Germany, Austria, Sweden and Switzerland by adding support for Sofort (Pay Now with Klarna) online banking payments
                                    </li>
                                </ul> -->
                                <div class="list-items">
                                   <h3><span>1. </span> iDEAL for the Netherlands</h3>
                                   <p>
                                       Win customers in the Netherlands by accepting online banking payments through the iDEAL network of the Dutch bank. 
                                   </p>
                                </div>
                                 <div class="list-items">
                                   <h3><span>2. </span>Bancontact for Belgium</h3>
                                   <p>
                                       Open up to customers in Belgium by accepting Bancontact cards.
                                   </p>
                                </div>
                                 <div class="list-items">
                                   <h3><span>3. </span> Giropay for Germany</h3>
                                   <p>
                                       Grow your customer base in Germany by allowing them to pay using Giropay, the most popular bank-based payment method in Germany. 
                                   </p>
                                </div>
                                <div class="list-items">
                                   <h3><span>4. </span>Dotpay for Poland</h3>
                                   <p>
                                       Power your growth in the Poland market by accepting one-time payments using Dotpay. Collect ad-hoc or unpaid payments instantly via DotPay using Chargebee's 'Pay Now' capability.  
                                   </p>
                                </div>
                                <div class="list-items">
                                   <h3> <span>5. </span>Sofort for Germany, Austria, Sweden and Switzerland</h3>
                                   <p>
                                       Get access to customers across Germany, Austria, Sweden, and Switzerland by adding support for Sofort (Pay Now with Klarna) online banking payments.
                                   </p>
                                </div>
                            </div>
                            <div class="cc-article__figure">    
                                <img src="/static/website/version/images/recurring-payments/payment-methods/bank-based-payment-methods.png" alt="Chargebee bank based Payments" width="390" class="img-responsive"> <div class="cc-article__figure-caption">
                                  <!--(Credit card, Debit card, Prepaid card)-->  
                              </div>
                            </div>
                            <!--<div class="cc-article__action">
                                <a href="/docs/offline_payments.html" class="cc-link cc-link--icon">Learn more</a>
                            </div>--> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 4
        ================================================================ -->
        
        <!-- ===============================================================
        Start: Content 3
        ================================================================ -->
        <section class="l-row" id="direct-debit">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="cc-article">
                            <h2 class="cc-article__title">
                                Direct Debit
                            </h2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="cc-article">
                            <div class="cc-article__header">
                                <div class="cc-article__heading">
                                    With Direct Debit, you won’t have to worry about late payments—the money reaches your account on the agreed date. 
                                </div>
                                <p class="cc-article__desc">
                                    A powerful pull based method with lower processing fees, reduced fraud risk and no cap on transaction value, Direct Debit is becoming one of the most sought after payment methods.
                                </p>
                                <p class="cc-article__desc">
                                    Accept recurring Direct Debit payments from the US, Europe and Australia with Chargebee. 
                                </p>
                            </div>
                            <div class="cc-article__figure"> 
                                <img src="/static/website/version/images/recurring-payments/payment-methods/direct-debit.png" alt="Chargebee Direct Debit" width="390" class="img-responsive">
                            </div>
                            <div class="cc-article__action">
                                <a href="/recurring-payments/direct-debit-payments/" class="cc-link cc-link--icon">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 3
        ================================================================ -->
        
        <!-- ===============================================================
        Start: Content 4
        ================================================================ -->
        <section class="l-row" id="offline-payments">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="cc-article">
                            <h2 class="cc-article__title">
                                Offline Payments
                            </h2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="cc-article">
                            <div class="cc-article__header">
                                <div class="cc-article__heading">
                                    Manage and track offline payments so that all your subscription information stays in one place.
                                </div>
                                <p class="cc-article__desc">
                                    B2B companies and brick-and-mortar stores handle large transactions for high ARPU customers through payments made through cash, checks, bank transfers and postal orders.
                                </p>
                                <p class="cc-article__desc">
                                    With Chargebee, set payment terms, address failed payments, send email reminders and more for offline payments just as you would for other payment avenues.
                                </p>

                                <ul class="cc-article__list">
                                    <li class="cc-article__item">
                                        Invoice payments (Cash, Cheque, Traditional Bank Transfers etc.)
                                    </li>
                                    <li class="cc-article__item">
                                        Stripe ACH Credit Transfer (with automated reconciliation)
                                    </li>
                                </ul>
                            </div>
                            <div class="cc-article__action">
                                <a href="/docs/offline_payments.html" class="cc-link cc-link--icon">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 4
        ================================================================ -->
        <!-- ===============================================================
        Start: Content 2
        ================================================================ -->
        <section class="l-row" id="digital-wallets">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="cc-article">
                            <h2 class="cc-article__title">
                                Digital Wallets
                            </h2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="cc-article">
                            <div class="cc-article__header">
                                <div class="cc-article__heading">
                                    Instant payments, convenience, quick processing—digital wallets are one of the fastest ways to cater to a global audience. 
                                </div>
                                <p class="cc-article__desc">
                                    Make payments from anywhere at any time. With mobile commerce trending, more enterprise B2C businesses offer digital wallets as an additional payment method.
                                </p>
                                <p class="cc-article__desc">
                                    Small and mid-sized consumer-focused businesses are also increasingly adopting digital wallets to benefit from receiving funds instantly. With Chargebee, give your customers a host of popular digital wallets to pay with. 
                                </p>
                            </div>
                            <div class="cc-article__figure">
                                <img src="/static/website/version/images/recurring-payments/payment-methods/digital-wallet.png" alt="Chargebee Digital Wallet" width="390" class="img-responsive">
                            </div>
                            <div class="cc-article__action">
                                <a href="/recurring-payments/digital-wallet-payments/" class="cc-link cc-link--icon">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 2
        ================================================================ -->
        <!-- ===============================================================
        Start: Content 4
        ================================================================ -->
        <section class="l-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="cc-cta">
                            <div class="cc-cta__header">
                                <div class="cc-cta__title">
                                    Get started within minutes. Create your free account today.
                                </div>
                            </div>
                            <div class="cc-cta__footer">
                                <div class="cc-hero__actions">
                                    <div class="cc-hero__action">
                                        <a href="/trial-signup/" class="cc-btn">Signup for free</a>
                                    </div>
                                    <div class="cc-hero__action">
                                        <a href="/schedule-a-demo/" class="cc-link cc-link--icon">Schedule a Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===============================================================
        End: Content 4
        ================================================================ -->
    </main>
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
        // animated top scrolling
        $('body, html').animate({scrollTop: 0}, 500);

        // Customer logo
        $('.customer-logos__two').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }]
        });

        // Icon anchor
        $('#cc-js-ocp').click(function() {
            $('html, body').animate({
                scrollTop: $("#online-card-payment").offset().top
            }, 1000)
        }), 
        $('#cc-js-bb').click(function (){  
            $('html, body').animate({
                scrollTop: $("#bank-based-payments").offset().top 
            }, 1000)
        });
        $('#cc-js-dd').click(function (){
            $('html, body').animate({
                scrollTop: $("#direct-debit").offset().top
            }, 1000)
        }),
        $('#cc-js-dw').click(function (){
            $('html, body').animate({
                scrollTop: $("#digital-wallets").offset().top
            }, 1000)
        }),
        $('#cc-js-op').click(function (){ 
            $('html, body').animate({
                scrollTop: $("#offline-payments").offset().top
            }, 1000)
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
.cc-medias{
  display: flex;
}
@media only screen and (max-width: 1200px) {
  .cc-medias {
    display: inline-block;
  }
}
.list-items h3 {
    color: #000000;
    font-weight: bold;
    margin-bottom: 7px;
} 
.list-items {
    margin-top: 30px;
}
.cc-article__header .list-items:nth-child(1) h3:before { 
    content: 'a';
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->