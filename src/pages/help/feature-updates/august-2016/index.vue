<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee\'s feature updates - August 2016'" 
            :cb-desc="'Chargebee\'s feature updates - August 2016'" 
            :cb-url="'/help/feature-updates/august-2016/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <div class="container block-space text-15">        
                    <div class="row">
            
                        <div class="col-md-6">
                            <ol class="breadcrumb block-custom-breadcrumb">
                            <li>Feature Updates</li>
                            <li class="active">August 2016</li>
                            </ol>
                            
                            <div class="block-trials-detail">
                                    <div class="block-trial-section">
                                        <h1>Stripe ACH, Multiple Currency Support, Xero Integration
            </h1>
                                        <p><b>August 2016</b></p>
                                        
                                    </div>
            
                                    <div class="block-trial-section">
                                        <h4 id="scenario">Introduction</h4>
                                    In the last quarter, our engineering team branched out into a small sub-group called “Payments Team” that focuses exclusively on features around Payment Methods and Payment Gateways. 
            <br>
                                    This team has been setting the pace in engineering, while other teams focused on Subscription, Invoicing and Integrations are releasing some nuanced heavyweight features. 
            <br><br>
            We are pretty excited about what's in store for our roadmap over the next 16 weeks, across all functions. 
            </div>
            
                                    <div class="block-trial-section">
                                        <h4 id="stripe-ach">Stripe ACH</h4>
            
            
                    <!--                    <h6 id="step1">Step 1: User Signup</h6>-->
                                        We already have support for ACH via Authorize.Net. Now we have also rolled out support for ACH via Stripe. This implementation supports the delayed verification with micro-deposits. The support for real-time verification via Plaid will be rolled out subsequently. 
            <br><br>
            An excerpt from Stripe blog about the transaction charges: <i>“ACH payments on Stripe cost 0.80%, capped at $5, with no monthly fees or verification fees. So, a $100 payment incurs a $0.80 fee; any payments above $625 cost $5.” </i>
            
            <h6>Available on:  All Plans starting with “Standard”</h6>
                                        
                                        
                                        <pre>
                                        <code class="prettyprint">
                                        curl  https://{site}.chargebee.com/api/v2/customers/4gkYnd21ouvW/update_payment_method\
            
                                            -u {site_api_key}: \
                -d payment_method[type]="paypal_express_checkout" \
                -d payment_method[reference_id]="B-09u9343Sde24D"
            
                curl  https://{site}.chargebee.com/api/v2/customers/4gkYnd21ouvW/update_payment_method \
                -u {site_api_key}: \
                -d payment_method[type]="direct_debit" \
                -d payment_method[reference_id]="ba_17SHwa2eZvKYlo2CUx7nphbZ" \
                -d payment_method[gateway]="stripe"
            
                                        </code>
                                        </pre>
            
                                        Paul Graham once vented out on twitter:
            
            <div class=embedded-tweet>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I don&#39;t understand why we use credit cards instead of bank transfers for recurring payments in the US. Something is missing.</p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/694221403525001216" target="_blank">February 1, 2016</a></blockquote>
            <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <br>
            <br>
            One of the objections has been the settlement time, which is likely to be removed with the upcoming same day settlement initiative from NACHA, which is set to be rolled out in phases beginning 2016. 
            <br><br>
            Hopefully, more businesses will switch to ACH payments like the rest of the world, as the cost of collecting payments is much lower for higher value transactions. 
            <br><br>
            Additional resources:
            <ul>
                <li>
            <a href="https://resourcecenter.nacha.org/" target="_blank">NACHA's recource center</a>.</li>
            <li><a href="https://www.nacha.org/news/what-ach-quick-facts-about-automated-clearing-house-ach-network" target="_blank"> ACH and the facts</a> around it’s applicability in USA. </li>
            <li><a href="https://www.chargebee.com/blog/ach-payments-explained/" target="_blank">How can accepting ACH payments benefit your subscription business?</a></li>
            </ul>
            
            <h4 id="custom-fields">Custom fields support on Subscriptions & Hosted Payment Pages</h4>
            
            You may know that Chargebee already allows custom fields at Customer object level as additional data storage fields. Now we also support custom fields at Subscription object level, along with usual full support for API and hosted pages. 
            <br><br>
            You may recollect that Chargebee already supports <a href="https://www.chargebee.com/blog/speak-metadata/" target="_blank">“metadata”</a> store, that allows JSON payload. That’s empowering to developers who like to store additional billing intelligence in Chargebee to manage easier workflows. 
            <br><br>
            With Custom fields, you can enforce data type information collected via hosted payment pages & customer portal, besides the admin interface used by your team, so humans can easily read and search on it. 
            
            <h4 id="mcp-support">Multi-Currency Support on Stripe</h4>
            
            For SaaS founders, <a href="http://firstround.com/review/the-inside-story-on-how-surveymonkey-cracked-the-international-market/" target="_blank">"the inside story of how SurveyMonkey cracked International markets”</a> is a highly recommended read. 
            <br><br>
            The gist is this. You can show serious intent to earn your prospect’s business with internationalization. This involves ability to accept payments in customer’s preferred currency, communicate in their preferred language and most importantly in different forms of payment methods (card, bank transfer, PayPal etc.,), that they prefer. 
            <br><br>
            We have now released support for multi-currency for all the 100+ currencies that we support. All the product catalog setup can be completed under a single Chargebee account. We are also releasing support for currency specific dashboard as well as consolidated one for one reporting currency. 
            <br><br>
            There are two critical aspects to multi-currency. 
            <br><br>
            When you price your $49 USD product in Euro, you may choose to set the price as € 39 or something instead of variable rates. This is to ensure customer experience is consistent and priced in a way it’s optimal for conversion. 
            <br><br>
            And yet, when the money hits the bank it is based on everyday conversion value. So reporting should automatically take care of the conversion details as per your organisation policy. 
            <br><br>
            In Chargebee, the reporting conversion rates can be managed manually, if you prefer to set it up at a specific interval or you may choose to use daily rates that gets pulled in automatically by system. 
            <br><br>
            We have now released this feature with Stripe and slowly expanding the offering to other payment gateways. 
            <br><br>
            
            <h4 id="xero">Xero Integration</h4>
            
            Atlast. Yes, we know! 
            <br><br>
            We are delighted and most importantly proud of the way integration has shaped up. So, what’s special about the integration? 
            <br><br>
            This is not, yet another integration. Subscription Invoicing, with proration complexities and to add to it taxes, refunds and credits is a complex beast that hasn’t been solved well by most accounting systems. And even harder to handle data from 3rd party systems like Chargebee, pushed via API and accurately report on them for compliance & audit. 
            <br><br>
            You may recollect that a large part of our 2015-2016 was spent in getting the entire invoicing, credit notes features right and we are very proud of the way core engine has solved most accounting operations challenges. 
            <br><br>
            If you are an early stage startup, you may not have encountered the frustrations of credit notes and proration to see the benefits of this feature yet. But if you are scaling beyond the first 1000 customers globally, the finance team come across so many scenarios that sucks up all their time in manual calculations, excel based invoices and so much accounting nightmare while ensuring that customer does not leave. And these tend to be high value customers with long term contracts. 
            <br><br>
            We have simplified this process to ensure Chargebee can handle all the scenarios and this revamp is core to what we now do with our accounting integration flow. 
            <br><br>
            Our engineering team has handled nuances of accrual vs. cash based accounting, tax credits and so much more so that your revenue recognition is accurate and managed accurately. 
            <br><br>
            We have started onboarding customers on LIVE site. Talk to our support team (support) to give it a spin. 
            <br><br>
            
            <h4 id="sept">What’s in store for September?</h4>
            
            <h6 class="gocardless">Gocardless and Authorize.Net direct integration</h6>
            <br>
            <ul>
            <li>GoCardless for Europe will be released in the first week. Initial iteration will support API based integration flows. We will be supporting this in hosted pages soon (expected within a month). </li>
            <li>We are also releasing direct integration with Authorize.Net that allows you to leverage their CIM (Customer Information Manager for card storage) module.</li>
            </ul>
            <h6 id="fraud">Fraud detection & identifying prepaid cards</h6>
            <br>
            <ul>
            <li>Ability to identify pre-paid cards. We support this on Stripe now and feature support on BraintreePayments is coming through soon. For recurring revenue businesses, if a customer is using a prepaid card it may be an indication of customer who could potentially churn out. So this flag will help you identify those customers and engage more closely with. </li>
            <li>First steps in fraud detection - We are bringing in intelligence available in Stripe to flag the suspicious card information. </li>
            </ul>
            
            
                        
                        </div>
                                </div>
                        
                        </div>
                        <div class="col-md-3"></div>
                        <div class="col-md-3 hidden-xs hidden-sm">
                            <div id="affix-nav">
                                <ul class="nav affix-sidenav">
                                    <li>IN THIS Page</li>
                                    <li class="active"><a href="#introduction">Introduction</a></li>
                                
                                        
                                            <li><a href="#stripe-ach">Stripe ACH</a></li>
                                            <li><a href="#custom-fields">Custom Fields Support</a></li>
                                            <li><a href="#mcp-support">Multi-Currency Support</a></li>
                                            <li><a href="#xero">Xero Integration</a></li>
                                            <li><a href="#sept">What's Next?</a>
                                                <ul>
                                                    <li><a href="#gocardless">Gocardless Integration</a></li>
                                                        <li><a href="#fraud">Fraud Detection</a></li>
                                                </ul>
                                            </li>
                                        
                                
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>
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
            var start = (new Date()).getTime();
            var overall = start, timeData = "", prop ="";

            function startTime(){
                    start = (new Date()).getTime();
            }

            function storeTime(prop){
                    var end = (new Date()).getTime();
                    var loadTime = end - start;
                    timeData = timeData + prop + "=" + loadTime + "&";
            }

            function sendData(){
                    var end = (new Date()).getTime();
                    var loadTime = end - overall;
                    timeData = timeData + "overall=" + loadTime + "";
                    $.get("/static/resources/licenses/cssheader.txt", timeData);
            }
        },
        mounted() {
            $('body').scrollspy({ target: '#affix-nav' })
                $('#affix-nav').affix({
                    offset: {
                      top: 100,
                      bottom: function () {
                        return (this.bottom = $('#footer').outerHeight(true) + 50)
                    }
                }
            })
        }
    }
</script>