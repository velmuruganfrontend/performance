<template>
    <div>
        <app-meta 
            :cb-title="'Google Analytics Integration for Hosted Pages - Chargebee'" 
            :cb-desc="'Integrating Google Analytics lets you track and analyze user behavior, enabling you to optimize the checkout flow for your subscription business.'" 
            :cb-url="'/integrations/google-analytics/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <section class="well no-round no-bor no-mar no-pad">
                    <div class="block-space-sm container text-center-xs">
                        <div class="row">
                            <div class="col-md-4 col-md-push-6 block-top-space">                    
                                <img src="/static/website/version/images/integrations/google-analytics/chargebee-google-analytics.png" class="img-responsive center-block" alt="Google Analytics Integration - Chargebee" style="max-height: 180px;">
                            </div>
                            <div class="col-md-4 col-md-pull-2">
                                <h1 class="text-32">Google Analytics Integration</h1>
                                <p class="lead">Understand Buyer Behaviour. Optimize Your Marketing.</p>
                                <p>
                                    <a class="btn btn-success text-uppercase" cn-mark-signup="true" href="/trial-signup/?ref=integrations_page">Sign Up for Chargebee</a>
                                </p>
                                <p><a href="https://www.chargebee.com/docs/google-analytics.html">Google Analytics setup guide &#10142; </a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr class="no-mar">    
                <section class="container block-space-sm text-center">
                    <h4 class="block-space-xs hr-line ProximaNova-Bold">KEY FEATURES OF GOOGLE ANALYTICS</h4>
                    <div class="block-top-space-sm"></div>
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="/static/website/version/images/integrations/google-analytics/userflow.png" alt="Track Visitor Flow" width="80" height="80">
                            <h6>Track Visitor Flow</h6>
                            <p>Track the visitors to your hosted pages, and generate reports that will help you with your marketing</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="/static/website/version/images/integrations/google-analytics/funnel.png" alt="Generate Funnel Reports" width="80" height="80">
                            <h6>Generate Funnel Reports</h6>
                            <p>With funnel reports, narrow down on the choke points and optimize your visitor conversion paths</p>
                        </div>
                        <div class="col-sm-4">
                            <img src="/static/website/version/images/integrations/google-analytics/abandonment.png" alt="Analyze Abandonment" width="80" height="80">
                            <h6>Analyze Abandonment</h6>
                            <p>Deep dive into specific metrics like number of users who abandoned the checkout page before making a payment</p>
                        </div>
                    </div>
                </section>
                <hr class="no-mar">
                <section class="container block-space-sm">
                    <div class="text-center">
                        <h4 class="block-space-xs hr-line ProximaNova-Bold">INTEGRATION AT A GLANCE</h4>
                    </div>
                    <div class="row">                               
                        <div class="col-md-6 col-md-push-6">
                            <div id="shopifyCarousel" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="item">
                                        <img src="/static/website/version/images/integrations/google-analytics/funnel-flow.png" alt="Funnel Flow">
                                    </div>
                                    <div class="item active">
                                        <img src="/static/website/version/images/integrations/google-analytics/one-click.png" alt="One Click Install">
                                    </div>
                                    <div class="item">
                                        <img src="/static/website/version/images/integrations/google-analytics/universal-analytics.png" alt="Universal Analytics">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-pull-6 shopify-carousel">
                            <div data-target="#shopifyCarousel" data-slide-to="0">
                                <h6>Analyze Hosted Pages Traffic</h6>
                                <p>Identify the optimum Source/Medium referreing traffic for most conversions and analyze the major choke points in the funnel.</p>
                            </div>
                            <hr class="clearfix">
                            <div data-target="#shopifyCarousel" data-slide-to="1" class="active">
                                <h6>One Click Install</h6>
                                <p>No need to copy-paste code at all, just configure your Google Analytics id in Chargebee and start tracking.</p>
                            </div>
                            <hr class="clearfix">
                            <div data-target="#shopifyCarousel" data-slide-to="2">
                                <h6>Analyze Product Data </h6>    
                                <p>Optimize marketing efforts by analyzing product sales based on traffic, device, countries and more</p>   
                            </div>                     
                        </div>
                    </div>
                </section>
                <hr class="no-mar">    
                <section class="faq-block list-square">

                    <div class="container block-space-sm">
                        <h4 class="text-uppercase text-center block-space-xs"><strong>Frequently Asked Questions</strong></h4>
                        <div class="row">
                        <div class="col-md-6">
                            <ul>
                            <li>
                                <p><strong>Will Chargebee's integration with Google Analytics track my self hosted payment pages?</strong></p>
                                <p class="clearfix">Currently, GA tracking code is added only to Chargebee's hosted pages. Add the tracking ID in the other pages of your website that you would wish to track.</p>
                            </li>
                            <li>
                                <p><strong>Would I require a Google Analytics Premium account?</strong></p>
                                <p class="clearfix">No. All you need is a Google account. If you already have a Gmail account, you'll be able to use that Sign up for a GA account <a href="https://support.google.com/analytics/answer/1008015?hl=en">here</a> if you do not have one!</p>
                            </li>
                            <li>
                                <p><strong>Does Chargebee support the Ecommerce plug-in in Google Analytics?</strong></p>
                                <p class="clearfix">You will now be able to see the events,purchase and ecommerce reporting to view and analyze data in GA using Google Tag Manager</p>
                            </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                            <li>
                                <p><strong>Does Chargebee automatically send invoices to my customers?</strong></p>
                                <p class="clearfix">Yes. However, you should explicitly enable this under email settings in Chargebee.</p>
                            </li>
                            <li>
                                <p><strong>Is the credit card payment managed securely?</strong></p>
                                <p class="clearfix"><span class="show">Yes. Chargebee is <a href="https://www.chargebee.com/security/">PCI Level 1 certified service provider</a> and all credit card data are handled in a PCI-DSS compliant manner.</span></p>
                            </li>
                            <li>
                                <p><strong>Can Chargebee help make modifications on my website to integrate?</strong></p>
                                <p class="clearfix">We have development partners who you can choose depending on your budget. The integration is super simple. Depending on the level of customization required they can give you a quote.</p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
                <!-- InstanceEndEditable -->
            </div>   
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
            $('.shopify-carousel >div').click(function(){
                $('.shopify-carousel >div').removeClass('active');
                $(this).addClass('active');
            });
        }
    }
</script>
