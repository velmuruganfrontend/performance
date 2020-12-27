<template>
    <div>
        <app-meta 
            :cb-title="'Help and Support - Chargebee'" 
            :cb-desc="'Get help and support for your subscription business. If you cannot find the answer here, you can ask our friendly support team.'" 
            :cb-url="'/help/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,//d2sq1ls4tm6x2u.cloudfront.net/static/app-static-assets/cdn-swiftype-1.0.1/stylesheets/tp_swiftype.css,/static/website/version/styles/select2-alt.css,/static/website/version/styles/support.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/mustache.js,/static/website/version/scripts/tp_swiftype.js,/static/website/version/scripts/select2.min.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                    <!-- InstanceBeginEditable name="Page Content" -->
                    <section class="support-block">
                        <section class="banner-block-light">
                            <div class="container">
                                <h1>How can we help?</h1>
                                <form class="search-form" id="swift-search-form" data-cb-type="all" data-cb-ajax="true">
                                    <div class="search-input-group">
                                        <input type="text" class="form-control" placeholder="Search for a specific topic, question or keyword" data-cb-search="input" autocomplete="off" autofocus>
                                        <span class="search-input-group-divider"></span>
                                        <span class="search-input-group-btn">
                                            <select class="select2" style="width:200px;display:none;" tabindex="-1" id="search-result-tab">
                                                <option value="all">All sources</option>
                                                <option value="docs">Help documentation</option>
                                                <option value="api">API reference</option>
                                                <option value="tutorial">API integration tutorials</option>
                                                <option value="faq">FAQ</option>
                                            </select>
                                        </span>
                                        <input value="All results" type="submit" class="sr-only">
                                    </div>
                                </form>
                                <!-- <div class="text-15">Get in touch with us at <a href="mailto:support@chargebee.com">support@chargebee.com</a> for any queries</div> -->
                            </div>
                        </section>
                        <hr class="no-mar">
                        <section class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2">
                                    <div class="search-result-block">
                                        <div class="search-result-loading" style = "display:none"><span>Loading search results...</span></div>
                                        <div id="no-result" class="search-result-none block-space text-center" style="display:none">
                                            <div class="no-result__title">Oops!</div>
                                            <p class="no-result__label">
                                                Sorry we couldn’t find results for your query.
                                            </p>
                                            <div class="no-result__content">
                                                <p class="no-result__heading">
                                                    Try,
                                                </p>
                                                <ul>
                                                    <li>Checking for typos and spelling errors.</li>
                                                    <li>Spacing out words attached to each other.</li>
                                                    <li>Using synonymous versions of the query.</li>
                                                </ul>
                                                <p>
                                                    Still don’t find what you’re looking for? 
                                                    <a href="#email_validation" class="no-result__link">
                                                        <span>Chat with us </span>
                                                    </a>
                                                    and we’ll figure it out together!
                                                </p>
                                            </div>
                                        </div>
                                        <div id="search-result-heading" class="search-result-heading" style="display:none;">
                                            <!--Showing <span></span> results for <strong id="swift-searched-for"></strong>-->
                                        </div>
                                        <div id="swift-result-container"></div>
                                    </div>
                                </div>
                            </div>
                
                            <!--hide this block after search result-->
                            <div id="general-topics">
                                <div class="support-links-list">                    
                                    <div class="support-link">
                                        <a href="/docs/" target="_blank">
                                            <span>
                                                <img src="/static/website/version/images/icon/jan2019/file-document-outline.svg" alt="" style="width: 36px; margin-bottom: 12px;">
                                            </span><br>
                                            Help documentation
                                        </a>
                                    </div><!-- 
                                    --><div class="support-link">
                                        <a href="https://apidocs.chargebee.com/" target="_blank">
                                            <span>
                                                <img src="/static/website/version/images/icon/jan2019/code-tags.svg" alt="" style="width: 36px; margin-bottom: 12px;">
                                            </span><br>
                                            API reference
                                        </a>
                                    </div><!-- 
                                    --><div class="support-link">
                                        <a href="/tutorials/" target="_blank">
                                        <span>
                                            <img src="/static/website/version/images/icon/jan2019/format-list-bulleted-type.svg" alt="" style="width: 36px; margin-bottom: 12px;">
                                        </span><br>
                                        API integration tutorials</a>
                                    </div><!-- 
                                    --><div class="support-link">
                                        <a href="/help/updates/" target="_blank">
                                        <span>
                                            <img src="/static/website/version/images/icon/jan2019/refresh.svg" alt="" style="width: 36px; margin-bottom: 12px;">
                                        </span><br>
                                        What's New?</a>
                                    </div>                    
                                        <div class="support-link">
                                        <a href="https://support.chargebee.com/support/home" target="_blank">
                                            <span>
                                            <img src="/static/website/version/images/icon/jan2019/book-open-variant.svg" alt="" style="width: 36px; margin-bottom: 12px;">
                                        </span><br>

                                        Knowledge Base</a>
                                    </div> 
                                </div>
                                <div class="text-center">                    
                                    <div class="block-title">
                                        Getting Started
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="support-brick" style="border-color:#AF9BF7;">
                                            <div class="support-brick-header" style="background-image: linear-gradient(45deg, rgba(155, 131, 245, 0.8) 0%, rgba(104, 104, 227, 0.8) 100%);">
                                                <span class="fa fa-file-text"></span>
                                                The Basics
                                            </div>
                                            <div class="support-brick-body">
                                                <ul class="list-arrow">
                                                    <li><a target="_blank" href="/docs/cards.html#what-is-a-payment-gateway">Understanding merchant account and payment gateways</a></li>
                                                    <li><a target="_blank" href="/docs/building-blocks-overview.html">An overview of Chargebee's building blocks</a></li>
                                                    <li><a target="_blank" href="/docs/plans.html">Configuring plans, addons and more</a></li>
                                                    <li><a target="_blank" href="/docs/hp_overview.html">Using hosted pages</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="support-brick" style="border-color:#F18F93;">
                                            <div class="support-brick-header" style="background-image: linear-gradient(-134deg, rgba(245, 145, 90, 0.8) 33%, rgba(241, 131, 103, 0.8) 58%, rgba(236, 110, 125, 0.8) 100%);">
                                                <span class="fa fa-money"></span>
                                                Collecting Payments
                                            </div>
                                            <div class="support-brick-body">
                                                <ul class="list-arrow">
                                                    <li><a target="_blank" href="/docs/cards.html">Card Payments</a></li>
                                                    <li><a target="_blank" href="/docs/paypal_express_checkout.html">PayPal Express Checkout</a></li>
                                                    <li><a target="_blank" href="/docs/amazon_payments.html">Amazon Payments</a></li>
                                                    <li><a target="_blank" href="/docs/direct-debit-payments.html">Direct Debit</a></li>
                                                    <li><a target="_blank" href="/docs/offline_payments.html">Offline Payments (Cash and Checks)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="support-brick" style="border-color:#C78BE9;">
                                            <div class="support-brick-header" style="background-image: linear-gradient(-134deg, rgba(229, 119, 172, 0.8) 33%, rgba(180, 109, 234, 0.8) 100%);">
                                                <span class="fa fa-wrench"></span>
                                                Using our APIs
                                            </div>
                                            <div class="support-brick-body">
                                                <ul class="list-arrow">
                                                    <li><a target="_blank" href="https://apidocs.chargebee.com/docs/api">An overview of Chargebee's APIs</a></li>
                                                    <li><a target="_blank" href="/docs/api_keys.html">API Keys</a></li>
                                                    <li><a target="_blank" href="/docs/webhook_settings.html">Webhooks</a></li>
                                                    <li><a target="_blank" href="https://github.com/chargebee/chargebee-samples">Code samples</a></li>
                                                    <li><a target="_blank" href="https://github.com/chargebee?utf8=%E2%9C%93&query=chargebee">Chargebee's client libraries</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-space">
                                    <div class="row">
                                        <div class="col-md-7 col-sm-6 text-15">                            
                                            <h6><strong>Is Chargebee the right solution for you?</strong></h6>
                                            <div>You are already running a subscription revenue business or starting one. You are looking to automate billing, so you can scale it beautifully. We can help you.</div>
                                            <hr style="width:100px;margin-left:0;">
                                            <h6><strong>So, is Chargebee a payment gateway?</strong></h6>
                                            <div>You need a payment gateway account to use Chargebee and we can help you get one from one of our <a href="/recurring-payments/">best-of-breed payment gateway partners worldwide</a>. But we aren’t one ourselves.</div>
                                            <hr style="width:100px;margin-left:0;">
                                            <h6><strong>I do not code and do not have a developer in-house. Can I still use Chargebee?</strong></h6>
                                            <div>Absolutely! Chargebee is designed as a fully configurable product and you can get started without developer assistance. To fully leverage the platform’s flexibility though, it helps to have developer assistance. You can do that later as you scale the business. Let us first help you get off the ground.</div>
                                            <hr style="width:100px;margin-left:0;">
                                            <h6><strong>Can I import my existing customer data to Chargebee?</strong></h6>
                                            <div>Yes. We regularly assist customers make a seamless switchover. Better still, you can continue using your existing payment gateway account if it is on our supported gateways list, like Stripe, Braintree, Authorize.Net, etc.</div>
                                            <hr style="width:100px;margin-left:0;">
                                            <p>
                                                <a href="/faq/"><u>See more Q&amp;As</u></a>
                                            </p>
                                            <div class="block-space-sm">Have more queries? Get in touch with us at <a href="mailto:support@chargebee.com">support@chargebee.com</a>.</div>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-sm-offset-1">
                                            <div class="block-well">
                                                <div class="block-space text-center">
                                                    <h4>Let's put an end to your recurring billing woes.</h4>
                                                    <div class="block-space-xs">
                                                        <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-success text-uppercase" onclick="ga('send', 'event', 'website', 'click', 'button-signup');">SIGN UP FOR FREE</a>
                                                    </div>
                                                    <div class="text-muted">
                                                        Takes less than 60 seconds. <br>
                                                        Full access. <br>
                                                        Pick a plan later.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div class="block-space-sm"></div>
                        </section>
                    </section>
                    <!-- InstanceEndEditable -->   
            </div>
        </div>
    </div>
</template>

<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader
        },
        mounted() {
            $('.header .nav-help').addClass('active');
            
            $(".select2").select2({
                minimumResultsForSearch: Infinity
            });
            $(".chat-with-us").on('click', function(){
                $("#fc_chat_layout").addClass("fc-expanded");
                $("#fc_chat_layout").removeClass("fc-collapsed");
                $("#fc_chat_layout").css("bottom", "0");
                console.log("hello!");
            });
        }
    }
</script>