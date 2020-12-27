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
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
      :cb-title="'Payment Gateway Provider Comparison and Evaluation Tool'" 
      :cb-desc="'A comprehensive tool to help you compare and choose the best payment gateway for your online business, specific to your country.'" 
      :cb-url="'/resources/tools/compare-payment-gateway-providers/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="''"
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
    <div class="cb-body">
        <!-- ===========================================================================================
        Content Part Start 
        ============================================================================================ -->
        <!-- ===========================================================================================
        Hero Start 
        ============================================================================================ -->
        <section class="hero" style="background: #5110B1">
            <div class="container">
                <article>
                    <h1 style="font-size: 32px; text-shadow: none;line-height: 42px;"> 
                        Looking for the right <br class="visible-lg">payment gateway provider?
                    </h1>
                    <p style="max-width: 500px; font-weight: normal; line-height: 22px; font-size: 16px;">
                        A comprehensive tool to help you compare and choose the best payment gateway for your online business, specific to your location.
                    </p>
                    <div class="cpg-dropdown">
                        <select class="cpg-dropdown__container" id="country" v-on:change="setCountryCode">
                            <option>Choose a country</option>
                            <option v-for="(allComparePaymentGatewayProvider, index) in allComparePaymentGatewayProviders" :key="index" v-bind:value="allComparePaymentGatewayProvider.fields.countryCode" v-bind:name="allComparePaymentGatewayProvider.fields.slug">{{ allComparePaymentGatewayProvider.fields.countryName }}</option>
                        </select>
                    </div>

                    <div style="max-width: 480px; margin: 40px auto 0; font-size: 15px; line-height: 22px;">
                        <a href="mailto:media@chargebee.com" class="cpg-hero__anchor">Couldn’t find your country? Write to us →</a>
                    </div>
                </article>
            </div>

            <div class="container">
                <div class="hero__rlink">
                    <a href="/recurring-payments/" target="_blank" rel="nofollow">Looking for Chargebee Supported Payment Gateways? Head over here.</a>
                </div>
            </div>
        </section>
        <!-- ===========================================================================================
        Hero End 
        ============================================================================================ -->
        <div class="cpg-hero__body">
            <!-- =======================================================================================
            pg list start
            ======================================================================================== -->
            <section class="cpg-feature container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-11">
                                <div class="cpg-feature__title">
                                    We feel you. The payment gateway listicles out there just don't cut it.
                                </div>

                                <div class="cpg-feature__blockquote">
                                    That's why we decided to do all the heavy lifting to come up with this tool that'll make your gateway hunting process as easy as possible.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="cpg-feature__text" style="font-size: 14px; line-height: 21px; ">
                                    <p style="color: #5110B1; font-weight: bold;">37 minutes.</p>
                                    <p style="margin-bottom: 18px">
                                        That's how long it took for us to gather information about a particular payment gateway on the interweb. 
                                    </p>
                                    <p style="margin-bottom: 18px">
                                        No two payment gateways are the same, and each one comes with its own set of pros and cons. Which will vary depending on the type of your business and your location.
                                    </p>
                                    <p style="margin-bottom: 18px">
                                        And as a fellow startup in the trenches, we know how difficult a task it is to compare, evaluate, and pick out the one that will best suit you.
                                    </p>
                                    <p style="margin-bottom: 18px">
                                        <em>
                                        And all those websites that list down the payment gateways available for each country? Minimal to no help whatsoever.
                                        </em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =======================================================================================
            pg list End 
            ======================================================================================== -->
            <!-- =======================================================================================
            Feature start 
            ======================================================================================== -->
            <section class="cpg-feature">
                <div class="container">
                    <div class="cpg-feature__header">
                        <h2 class="cpg-feature__title">
                            Payment Gateway Comparision Parameters
                        </h2>
                        <p class="cpg-feature__desc">
                            A quick list of all the criteria that we'll be considering to evaluate the payment gateways
                        </p>
                    </div>

                    <div class="cpg-feature__body">
                        <!-- ===============================================================================
                        Section 1 
                        ================================================================================ -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Hosted or integrated
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                A hosted gateway redirects your customers from your website to the payment processor's platform to collect payment details. In an integrated gateway, your customers will never have to leave your website to type in payment info and to place orders.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Merchant Account
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                While some gateways need you to apply for a merchant account (a special bank account to accept card payments) to transfer the funds, others will deposit the funds directly in your existing bank account.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===============================================================================
                        Section 1 
                        ================================================================================ -->
                        <!-- ===============================================================================
                        Section 2 
                        ================================================================================ -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Pricing
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                Setup fee, cancellation fee, chargeback fee, per-transaction fees, monthly usage charges, etc.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Settlement time
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                The time taken for the funds to get transferred from the customer's bank account to your (aka the merchant's) bank account, after deducting the payment provider fees. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===============================================================================
                        Section 2 
                        ================================================================================ -->
                        <!-- ===============================================================================
                        Section 3 
                        ================================================================================ -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Security Compliance
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                The various information security standards that the payment gateway is compliant with, the most important one being the PCI DSS (Payment Card Industry Data Security Standard).
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Payment types
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                The different ways in which the payment gateway will let you accept payments from your customers - credit/debit cards, direct debit, internet banking, wallets, etc. Remember, not everyone would like to pay using cards.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===============================================================================
                        Section 3 
                        ================================================================================ -->
                        <!-- ===============================================================================
                        Section 4
                        ================================================================================ -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Currencies supported
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                The various currencies that you can accept payments in, using the said payment gateway. Especially important if you're looking to expand to a global market.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Shopping carts
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                Plugins/integrations of E-commerce platforms that are readily available for the payment gateway. If you don't want to spend much time to integrate your gateway with your website/store and start accepting payments faster, then this one's for you.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===============================================================================
                        Section 4
                        ================================================================================ -->
                        <!-- ===============================================================================
                        Section 5 
                        ================================================================================ -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="cpg-feature__content">
                                    <div class="row">
                                        <div class="col-sm-5 col-md-5">
                                            <div class="cpg-feature__heading">
                                                Status page
                                            </div>
                                        </div>
                                        <div class="col-sm-7 col-md-6">
                                            <div class="cpg-feature__text">
                                                The payment gateway system's performance record. This reflects the gateway's reliability and availability - in periods of your payment gateway's downtime, you simply won't be able to process payments using it.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===============================================================================
                        Section 5 
                        ================================================================================ -->
                    </div>
                </div>
            </section>
            <!-- =======================================================================================
            Feature End 
            ======================================================================================== -->
            <!-- =======================================================================================
            country list End 
            ======================================================================================== -->
            <section class="cpg-country">
                <div class="container">
                    <div class="cpg-hero__body">
                        <!-- =======================================================================================
                        country list End 
                        ======================================================================================== -->
                        <section class="cpg-country">
                            <div class="container">
                                <div class="cpg-country__header">
                                    <h2 class="cpg-country__title">
                                        Pick your country. Weigh up the various parameters. And say hello to the payment gateway that befits your business.
                                    </h2>
                                </div>

                                <div class="cpg-country__body">
                                    <!-- ===========================================================================
                                    country 1 start 
                                    ============================================================================ -->
                                    <div class="cpg-country__content">
                                        <h4 class="cpg-country__heading">Asia-Pacific</h4>
                                        <div class="row">
                                            <div class="col-sm-2 col-xs-6" v-for="(allComparePaymentGatewayProvider, index) in allComparePaymentGatewayProviders" :key="index" v-if="allComparePaymentGatewayProvider.fields.zone == 'Asia-Pacific'">
                                                <a v-bind:href="'/resources/tools/compare-payment-gateway-providers/'+allComparePaymentGatewayProvider.fields.slug+'/'" class="cpg-country__link" :class="'cpg-country__link--'+allComparePaymentGatewayProvider.fields.slug">{{ allComparePaymentGatewayProvider.fields.countryName }} <span>→</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ===========================================================================
                                    country 1 End 
                                    ============================================================================ -->
                                    <!-- ===========================================================================
                                    country 2 start 
                                    ============================================================================ -->
                                    <div class="cpg-country__content">
                                        <h4 class="cpg-country__heading">Europe</h4>
                                        <div class="row">
                                            <div class="col-sm-2 col-xs-6" v-for="(allComparePaymentGatewayProvider, index) in allComparePaymentGatewayProviders" :key="index" v-if="allComparePaymentGatewayProvider.fields.zone == 'Europe'">
                                                <a v-bind:href="'/resources/tools/compare-payment-gateway-providers/'+allComparePaymentGatewayProvider.fields.slug+'/'" class="cpg-country__link">{{ allComparePaymentGatewayProvider.fields.countryName }} →</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ===========================================================================
                                    country 2 End 
                                    ============================================================================ -->
                                    <!-- ===========================================================================
                                    country 3 start 
                                    ============================================================================ -->
                                    <div class="cpg-country__content">
                                        <h4 class="cpg-country__heading">Americas</h4>
                                        <div class="row">
                                            <div class="col-sm-2 col-xs-6" v-for="(allComparePaymentGatewayProvider, index) in allComparePaymentGatewayProviders" :key="index" v-if="allComparePaymentGatewayProvider.fields.zone == 'Americas'">
                                                <a v-bind:href="'/resources/tools/compare-payment-gateway-providers/'+allComparePaymentGatewayProvider.fields.slug+'/'" class="cpg-country__link">{{ allComparePaymentGatewayProvider.fields.countryName }} →</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ===========================================================================
                                    country 3 End 
                                    ============================================================================ -->
                                </div>
                            </div>
                        </section>
                        <!-- =======================================================================================
                        country list End 
                        ======================================================================================== -->
                    </div>
                </div>
            </section>
            <!-- =======================================================================================
            country list End 
            ======================================================================================== -->
            <!-- =======================================================================================
            Signup start 
            ======================================================================================== -->
            <section class="container">
                <div class="row">
                    <div class="col-sm-7 col-sm-offset-1">
                        <div class="cpg-signup">
                            <div class="cpg-signup__text">
                                Payment gateways do a splendid job at processing payments, agreed. But to grow, to scale subscriptions, and to effortlessly handle complex recurring billing use cases, your teams will need something more.
                            </div>
                            <div class="cpg-signup__btn">
                                <a href="/" class="btn btn-primary btn-primary-sec btn-md btn-suffix">
                                    Learn more
                                </a>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
            <!-- =======================================================================================
            Signup End 
            ======================================================================================== -->
        </div>
        <!-- ===========================================================================================
        Content Part End 
        ============================================================================================ -->​
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

  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    asyncData ({ env, params }) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID,
          order: 'sys.createdAt'
        })
      ]).then(([allComparePaymentGatewayProviders]) => {
        return {
          allComparePaymentGatewayProviders: allComparePaymentGatewayProviders.items
        }
      }).catch(console.error)
    },
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {
        setCountryCode() {
            // var countryCode = document.getElementById("country").value,
            // countryName = document.getElementById("country").dataname;

            var countrySelect= document.getElementById("country");
            var selectedOption = countrySelect.options[countrySelect.selectedIndex]
            var countryCode = selectedOption.value,
            countryName = selectedOption.getAttribute('name');
            window.location.href = '/resources/tools/compare-payment-gateway-providers/'+countryName;
        }
    },
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

    .hero--anchor{
        font-size: 14px;
        color: #7865ff;
        border-bottom: 1px dashed;
    }
    .hero--anchor:focus,
    .hero--anchor:hover{
        text-decoration: none;
    } 
    .hero__rlink{
        margin: 0  0 -40px auto;
        padding-top: 40px;
        max-width: 260px;
        text-align: right;
    }
    .hero__rlink > a{
        display: inline-block;
        font-size: 13px;
        color: rgba(255,255,255, 0.6);
    }
    .hero__rlink > a:hover,
    .hero__rlink > a:focus{
        color: rgba(255,255,255, 0.8);
    }
    @media(min-width:992px){
        .hero{
            padding-bottom: 70px;
        }
    }
    @media(max-width:991px){
        .hero{
            padding-bottom: 50px;
        }
        .hero__rlink{
            margin: 0  auto -20px;
            padding-top: 40px;
            max-width: 260px;
            text-align: center;
        }
    }
    .cpg-country__link.cpg-country__link--india{
        position: relative;
    }
    .cpg-country__link.cpg-country__link--india span{
        display: none;
    }
    .cpg-country__link.cpg-country__link--india:after {
        content: "New";
        position: absolute;
        margin-left: 4px;
        background: #34CE9D;
        color: #fff;
        padding: 6px 4px;
        border-radius: 20px;
        line-height: 1px;
        font-size: 10px;
        font-weight: bold;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->


