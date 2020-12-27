<template>
    <div>
        <app-meta 
            :cb-title="'Payment Gateway Comparison - Interactive Tool | Chargebee'" 
            :cb-desc="'With this tool, Chargebee lets you compare payment gateways easily. Select the country and enter your transaction value to get an estimate of gateway fees, a chargeback fee and success rate.'" 
            :cb-url="'/payment-gateways/evaluator-tool/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/mustache.js,/static/website/version/scripts/transaction-calculator.js,//www.googleadservices.com/pagead/conversion.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===============================================================
                            Start Banner Part  
            ===============================================================-->
            <section class="hero hero--invert" style="background-image: none; background-color: #F5F5F5; padding-bottom: 30px;">
                <div class="container">
                    <article>
                        <h1>Compare Payment Gateways <br class="visible-lg">Supported By Chargebee</h1>
                        <p style="max-width: 600px;">
                            Chargebee supports over 20 payment gateways across 50+ countries. With this tool, quickly see how much you'll be spending on payment gateway charges across these gateways in your preferred country.
                        </p>
                    </article>
                </div>

                <div class="container">
                    <div class="hero__rlink">
                        <a href="/resources/tools/compare-payment-gateway-providers/" target="_blank">
                            Not looking for Chargebee specific payment gateways? Check out our comprehensive comparison of 80+ payment gateways across the world
                        </a>
                    </div>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->

            <!-- Start Main Body Content -->
            <article class="fc__calculator">
                <div class="line-header" style="border-width: 0; padding-top:0; "></div>
                <!-- fc = fee-calculator content -->
                <div class="container">
                    <div class="row">

                        <!--Start - Click search to hide -->
                        <div id="fee-form" class="col-md-4 col-md-offset-4">
                            <section class="fc" style="max-width: 280px; margin: auto;">
                                <h3 class="fc__title mar-b-xs">Step 1:</h3>
                                <div class="fc__heading">Choose your country</div>
                                <!-- cl = country list -->
                                <ul class="fc-cl mar-b-sm" id="country-select">
                                    <li class="fc-cl__box" data-cb-country-code="us">
                                        <div class="fc-cl__flag"></div>
                                        <div class="fc-cl__country-name">United States</div>
                                    </li>

                                    <li class="fc-cl__box" data-cb-country-code="uk">
                                        <div class="fc-cl__flag uk"></div>
                                        <div class="fc-cl__country-name">United Kingdom </div>
                                    </li>

                                    <li class="fc-cl__box" data-cb-country-code="au">
                                        <div class="fc-cl__flag aus"></div>
                                        <div class="fc-cl__country-name">Australia </div>
                                    </li>

                                    <li class="fc-cl__box" data-cb-country-code="ca">
                                        <div class="fc-cl__flag can"></div>
                                        <div class="fc-cl__country-name">Canada </div>
                                    </li>
                                </ul>

                                <!-- tv = transaction value -->
                                <div class="fc-tv mar-b-sm">
                                    <h3 class="fc__title mar-b-xs">Step 2:</h3>
                                    <div class="fc__heading mar-t-xs">Your Average Transaction Value</div>
                                    <!-- <div class="slider" id="cb-slider"></div> -->
                                    <div class="fc-relative">
                                        <div class="fc-tv__slider-value">
                                            <span id="transactionValueCurrencyLabel"></span>
                                            <input type="text" id="avgTransactionValue" value="49" maxlength="10">
                                        </div>
                                        <div id="avgTransactionValueError" class="fc-error fc-absolute"></div>
                                    </div>
                                </div>

                                <!-- ts = transaction size -->
                                <div class="fc-ts mar-b-sm">
                                    <h3 class="fc__title mar-b-xs">Step 3:</h3>
                                    <div class="fc__heading mar-t-xs">Number of Transactions in your Billing Cycle</div>
                                    <div class="fc-relative">
                                        <div class="fc-ts__range">
                                            <div class="fc-ts__input">
                                                <input type="text" id="avgTransactionSize" value="10" maxlength="10">
                                            </div>
                                            <div class="fc-ts__range-tool">
                                                <span id="range-increment">+</span>
                                                <span id="range-decrement">-</span>
                                            </div>
                                            <div id="avgTransactionSizeError" class="fc-error fc-absolute"></div>
                                        </div>
                                    </div>

                                    <div class="fc-btn" id="fee-form-submit">
                                        <input type="button" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-block" value="Compare" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    <!-- End - Click search to hide -->

                    <!-- Start - Search Details -->

                        <div id="fee-result-container" style="display:none" class="col-md-8 col-sm-7">
                            <div class="row">

                                <div class="col-sm-6">
                                <!-- t = table -->
                                    <div class="fc-t-title">
                                        Amount you'll receive out of
                                        <span id="currencyLabel"><span id="totalAmtLabel" class="fc__sub-title"></span></span>
                                    </div>
                                    
                                </div>
                                <div class="col-sm-6">
                                    <div class="fc-t-legend">
                                    <div class="fc-t-legend__set">Domestic Transactions</div>
                                    <div class="fc-t-legend__set fc-t-legend_inter">International Transactions</div>  
                                    </div>
                                </div>
                            </div>   

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="fc-tab">
                                        <table class="table fc-tab-group">
                                            <colgroup>
                                                <col width="20%">
                                                <col width="16%">
                                                <col width="16%">
                                                <col width="16%">
                                                <col width="16%">
                                                <col width="16%">
                                            </colgroup>
                                            <thead>
                                                <th></th>
                                                <th>Net <br>revenue</th>
                                                <th>Chargeback <br>fee</th>
                                                <th>Success <br>Rate</th>
                                                <th>Settlement <br>Time</th>
                                                <th>Gateway <br>Status</th>
                                            </thead>
                                            <tbody id="fee-result-template">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="fc-b-legend__set">
                                    <span>*</span>MP = Merchant Provider
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <!-- End - Search Details -->
                    </div>
                </div>
            </article>
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
        mounted() {
            $('[data-cb-country-code="us"]').addClass('active')
            $('.fc-cl__box').on('click', function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            /* <![CDATA[ */
            var google_conversion_id = 979719580;
            var google_custom_params = window.google_tag_params;
            var google_remarketing_only = true;
            /* ]]> */
        },
        methods: {}
    }
</script>
<style type="text/css" media="screen">
    .hero__rlink{
        margin: 0  0 0 auto;
        padding-top: 40px;
        max-width: 420px;
        text-align: right;
    }
    .hero__rlink > a{
        display: inline-block;
        font-size: 13px;
        color: rgba(0,0,0, 0.6);
    }
    .hero__rlink > a:hover,
    .hero__rlink > a:focus{
        color: rgba(0,0,0, 0.8);
    }
    @media(max-width:991px){
        .hero__rlink{
            margin: 0  auto -20px;
            padding-top: 40px;
            max-width: 260px;
            text-align: center;
        }
    }
</style>
<!--
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/979719580/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
-->