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
      :cb-title="'Payment Gateway Providers In Australia'" 
      :cb-desc="'A comprehensive tool to help you compare and evaluate the best payment gateway for your online business, specific to Australia.'" 
      :cb-url="'/resources/tools/compare-payment-gateway-providers/'+comparePaymentGatewayProviders.fields.slug+'/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/payment-gateway.css'"
      :cb-head-script="''"
      :cb-body-script="'/static/website/version/scripts/compare-payment/manifest.17fa103e7e6693627159.js,/static/website/version/scripts/compare-payment/vendor.3d8733a089ca5f4c9fcb.js,/static/website/version/scripts/compare-payment/app.2278c1862a247daa76f4.js'"
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
    <!-- ===========================================================================================
    Content Part Start 
    ============================================================================================ -->
        <div id=app></div>
        <script>
            window.countryCode = '{{comparePaymentGatewayProviders.fields.countryCode}}';    
        </script>
        <!-- ===========================================================================================
        Content Part End 
        ============================================================================================ -->
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
          'fields.slug': params.slug
        }),
        client.getEntries({
          'content_type': env.CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID,
          order: 'sys.createdAt'
        })
      ]).then(([comparePaymentGatewayProviders, allComparePaymentGatewayProviders]) => {
        return {
          comparePaymentGatewayProviders: comparePaymentGatewayProviders.items[0],
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
    .hero article{
        text-align: left;
    }
    @media(min-width:992px){
        .hero{
            padding-bottom: 0;
        }
    }
    @media(max-width:991px){
        .hero{
            padding-bottom: 50px;
        }
    }
    span.fa.fa-info-circle:after {
        content: "i";
        text-transform: lowercase;
        background-color: #999;
        padding: 0 4px;
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
        font-size: 8px;
        vertical-align: middle;
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
