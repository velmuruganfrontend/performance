<template>
    <div>
        <app-meta 
            :cb-title="'PCI DSS 3.2 - Security - Chargebee'" 
            :cb-desc="'Chargebee take security very seriously and we continuously look for opportunities to make improvements.'" 
            :cb-url="'/security/pci/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <section class="hero hero--invert" style="background-image: none; background-color: #7864FF; padding-top: 150px; padding-bottom: 80px">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h1 style="color: #fff; font-weight: 400">PCI DSS 3.2</h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->
            <!-- ===============================================================
                                Start Content Part  
            ===============================================================-->
            <section class="container">
                <div class="row">
                    <div class="col-sm-7 col-md-6 col-md-offset-1">
                        <!-- ===============================================================
                        Section 1  
                        ===============================================================-->
                        <article class="cb-factor">
                            <p class="cb-factor__desc">
                                For every SaaS and E-commerce business that provides card payment options to its customers, the measures taken for the protection of their sensitive card information are of paramount importance. A security breach is every firm's worst nightmare; it could lead to a deep dent in a company's reputation, in addition to the monetary depletion.
                            </p>
                            <p class="cb-factor__desc">
                                To let your customers know that your data security is infallible, and to validate that claim, a PCI DSS Compliance would serve as the ultimate credential.
                            </p>
                        </article> 
                        
    
                        <!-- ===============================================================
                        Section 2  
                        ===============================================================-->
                        <article class="cb-factor" id="about-pci-dss">
                            <h2 class="cb-factor__title">
                                About PCI DSS
                            </h2>
    
                            <p class="cb-factor__desc">
                                The Payment Card Industry Data Security Standard encompasses a set of practices and procedures required to be followed by companies (the ones that process, store, or transmit card details) to establish protection of their customers' card  data.
                            </p>
                        </article>
    
                        
                        <!-- ===============================================================
                        Section 3 
                        ===============================================================-->
                        <article class="cb-factor" id="how-to-get-pci-dss-compliant">
                            <h2 class="cb-factor__title">
                                How to get PCI DSS Compliant
                            </h2>
    
                            <p class="cb-factor__desc">
                                Companies that process below 6 million transactions per year have to fill up the corresponding SAQ (Self-Assessment Questionnaire), while the other companies have to submit a QSA (Qualified Security Assessor) approved compliance report. The SAQs are further classified (into A, B, C, D) based on the way you handle the card information. Among those, SAQ B and SAQ C aren't applicable for the SaaS and E-commerce folks, and hence let's just talk about those that matter to us.
                            </p>
    
                            <ul class="cb-factor__list">
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">SAQ A</h4>
                                    <p class="cb-factor__desc">
                                        If you don't handle your customers' card details at any point of the transaction, SAQ A is meant for you (a good example would be when you are using your payment processor's secure iFrame/hosted payment page to record the payment information).
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">SAQ A-EP</h4>
                                    <p class="cb-factor__desc">
                                        You'll be required to complete SAQ A-EP (a stricter version of SAQ A), if you're accepting the card information with your own form and then passing it on to your payment processor directly from the client's server, so that the data never touches your server.
                                    </p>
                                    <p class="cb-factor__desc">
                                        Apart from these two options, you also have the most stringent form, SAQ D, which is meant for businesses that handle (process/store/transmit) card data using their own systems.
                                    </p>
                                </li>
                            </ul>
                            
                            <p class="cb-factor__desc">
                                Click <a href="https://www.pcisecuritystandards.org/documents/SAQ_InstrGuidelines_v3-1.pdf" class="term-anchor">here</a> to learn more about which SAQ is applicable for your business.
                            </p>
    
                        
    
                            <p class="cb-factor__desc" style="margin-top: 40px;">
                                <strong>Note:</strong><br>
                            </p>
                            <p class="cb-factor__desc">
                                Let's say that you are completely outsourcing your card data handling and thus fall under the SAQ A category, but are processing more than 6 million transactions per year. What do you do then? You'll have to get a third-party QSA to certify that you adhere to SAQ A by completely outsourcing all your card data handling.
                            </p>
    
                        </article>
    
    
                        <!-- ===============================================================
                        Section 4
                        ===============================================================-->
                        <article class="cb-factor" id="chargebee-pci-compliance">
                            <h2 class="cb-factor__title">
                                Chargebee and PCI Compliance
                            </h2>
    
                            <p class="cb-factor__desc">
                                Chargebee is a <a href="/static/resources/downloads/PCI_DSS_v3-2-1_COC_Chargebee_2020.pdf" class="term-anchor">PCI DSS Level 1 certified</a> service provider, and here're your different integration options (and their corresponding SAQ form requirements):
                            </p>
    
                            <ul class="cb-factor__list">
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee’s iFrame based hosted pages (for SAQ A compliance)</h4>
                                    <p class="cb-factor__desc">
                                        With this option, you get to offer your customers a native checkout experience, and still use the Chargebee SDK (with the language of your preference). Behind the scenes, you can employ any of the payment gateways such as Stripe, Braintree, Authorize.Net, WorldPay, eWay, etc.
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee's hosted payment pages (for SAQ A compliance)</h4>
                                    <p class="cb-factor__desc">
                                        This allows you to let us take care of the complete checkout experience, with the help of customizable hosted pages that match your website/application experience. Like the first option, all of the payment gateways are compatible in this case as well.
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee.js Hosted Fields and Components (for SAQ A compliance)</h4>
                                    <p class="cb-factor__desc">
                                        With this option, you can customize and create your own checkout page. Once the customer’s credit card details are entered in the hosted payment Fields or Components, the sensitive card information is encrypted and sent to the payment gateway. The processed information from the payment gateway is then sent to Chargebee as a 'Token ID'. The Token ID should be used in the <a href="https://apidocs.chargebee.com/docs/api/subscriptions#create_a_subscription" target="_blank" class="term-anchor">Create subscription</a> and <a href="https://apidocs.chargebee.com/docs/api/payment_sources#create_using_temporary_token" target="_blank" class="term-anchor">Create payment source</a> API to create subscriptions and payment methods in Chargebee.
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee's API + Any Gateway (for SAQ A-EP compliance)</h4>
                                    <p class="cb-factor__desc">
                                        In this option, you'll have to collect the card details at your end, and pass it on to Chargebee, which then forwards the information to Stripe.
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee's API + Stripe / Braintree JS (for SAQ A compliance)</h4>
                                    <p class="cb-factor__desc">
                                        Here the payment gateway of your choice (Stripe/Braintree) will give you a payment form that needs to be embedded in your checkout page, from which the card details are collected directly and sent to the gateway.
                                    </p>
                                </li>
                                <li class="cb-factor__item">
                                    <h4 class="cb-factor__subtitle">Chargebee's API + Stripe Checkout / Braintree Drop-In (for SAQ A compliance)</h4>
                                    <p class="cb-factor__desc">
                                        Similar to the previous case, you'll be using the iFrame provided by Stripe/Braintree in your checkout page, which will be recording the payment details, with no intervention from your side.
                                    </p>
                                </li>
                            </ul>
    
                            <p class="cb-factor__desc" style="margin-top: 50px;">
                                Further Reading:
                            </p>
    
                            <ul class="cb-factor__list" style="margin-top: 20px;">
                                <li class="cb-factor__item">
                                    <a href="https://www.chargebee.com/security/" class="term-anchor">Chargebee's Security Policies and Procedures</a>
                                </li>
                                <li class="cb-factor__item">
                                    <a href="https://www.chargebee.com/docs/stripe.html#integration-options" class="term-anchor">Chargebee and Stripe Integration Options (and PCI requirements)</a>
                                </li>
                                <li class="cb-factor__item">
                                    <a href="https://www.chargebee.com/docs/braintree.html#integration-options" class="term-anchor">Chargebee and Braintree Integration Options (and PCI requirements)</a>
                                </li>
                            </ul>
    
                        </article>
    
                        
                        
                    </div>
    
    
    
                    <!-- ===============================================================
                    Sidebar Navigation
                    ===============================================================-->
                    <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 60px;">
                        <div id="affix-nav" class="cb-affix">
                            <ul class="nav cb-affix__list">
                                <li class="cb-affix__title">PCI DSS 3.2</li>
                                <li class="cb-affix__item">
                                    <a href="#about-pci-dss">About PCI DSS</a>
                                </li>
                                <li class="cb-affix__item"> 
                                    <a href="#how-to-get-pci-dss-compliant">How to get PCI DSS Compliant</a>
                                </li>
                                <li class="cb-affix__item">
                                    <a href="#chargebee-pci-compliance">Chargebee and PCI Compliance</a>
                                </li>
                            </ul>
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
            $('body').scrollspy({ target: '#affix-nav' })
            $('#affix-nav').affix({
                offset: {
                    top: 330,
                    bottom: function () {
                        return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
                    }
                }
            })
        },
        methods: {}
    }
</script>
<style type="text/css">
    .hero--invert{
        padding-bottom: 100px;
    }
    .term-anchor{
        color: #7864FF
    }
    .cb-affix__item{
        margin-bottom: 6px;
        margin-top: 6px;
    }
    .cb-factor__item{
        margin-bottom: 15px;
    }
    /*Fixed header hide*/
    #ch-js-header-cloned{
        display: none;
    }
    @media(max-width:767px){
        .hero--invert{
            padding-bottom: 40px;
        }
    }
    @media (max-width: 767px){
        .affix{
            position: static!important;
        }
    }
</style>