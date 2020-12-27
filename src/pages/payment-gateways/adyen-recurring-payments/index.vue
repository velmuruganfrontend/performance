<template>
    <div>
        <app-meta 
            :cb-title="'Adyen + Chargebee | Seamless Subscription Billing & Payments to Scale Globally'" 
            :cb-desc="'Globalize your subscription business with Chargebee while Adyen takes care of your payments. Take payments in your customers\’ local currencies.'" 
            :cb-url="'/payment-gateways/adyen-recurring-payments/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/adyen.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <script src="https://js.chargebee.com/v2/chargebee.js"></script>
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="cp-l-main">
                <!-- =====================================================================================
                Start: Hero Section
                ====================================================================================== -->
                <section class="cp-l-main__row">
                    <div class="cp-hero">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="cp-hero__header">
                                        <div class="cp-label">
                                            <div class="cp-label__text">Chargebee + Adyen</div>
                                        </div>
                                        <h1 class="cp-hero__title">Expand your Subscription <br class="hidden-xs">Businesses Globally</h1>
                                    </div>
                                    <div class="cp-hero__body">
                                        <p class="cp-hero__desc">Handle the growing pains of a subscription business with Chargebee and Adyen.</p>
                                        <div class="cp-hero__actions">
                                            <div class="cp-hero__action"><a href="/trial-signup/" class="btn btn-primary-sec">Sign up for free →</a></div>
                                            <div class="cp-hero__action"><a href="/schedule-a-demo/" class="btn btn-flat">Schedule a Demo →</a></div>
                                        </div>
                                    </div>
                                    <div class="cp-hero__footer">
                                        <p class="cp-hero__message">With Adyen’s <a href="https://www.adyen.com/?utm_medium=Referral&utm_source=Partner&utm_campaign=website&utm_partner=Chargebee">interchange+ pricing model</a>, large businesses can reduce their cost of processing payments and get more control over their finances.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Hero Section
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Slider Section
                ====================================================================================== -->
                <section class="cp-l-main__row hidden-xs">
                    <div class="cp-slider">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="cp-slider__header">
                                        <div class="cp-slider__title">
                                            Level up your global payments by accepting credit cards or bank transfers while minimizing involuntary churn
                                        </div>
                                        <p class="cp-slider__label">Scale your business with Chargebee and Adyen</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="cp-slider__body">
                                        <div class="cp-slider__container">
                                            <div class="cp-slider__item">
                                                <div class="cp-slider__progress">
                                                    <div class="cp-slider__heading">
                                                        Reach Global Markets
                                                    </div>
                                                    <p class="cp-slider__desc">Allowing your customers to pay in their local currency can be a friction point. Power your growth in new markets with recurring billing in 100+ currencies.</p>
                                                </div>
                                                <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                                <div class="cp-slider__sep"></div>
                                            </div>
                                            <div class="cp-slider__item">
                                                <div class="cp-slider__progress">
                                                    <div class="cp-slider__heading">
                                                        Mitigate Risks
                                                    </div>
                                                    <p class="cp-slider__desc">Accepting payments from multiple countries comes with the risk of fraud. Identify and reduce fraudulent transactions with real-time data.</p>
                                                </div>
                                                <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                                <div class="cp-slider__sep"></div>
                                            </div>
                                            <div class="cp-slider__item">
                                                <div class="cp-slider__progress">
                                                    <div class="cp-slider__heading">
                                                        Optimize Revenue
                                                    </div>
                                                    <p class="cp-slider__desc">Expired cards and outdated information lead to failed payments. Validate card information in real-time, maintain up-to-date card details. Optimize revenue at every step of the payment flow.</p>
                                                </div>
                                                <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                                <div class="cp-slider__sep"></div>
                                            </div>
                                            <div class="cp-slider__item">
                                                <div class="cp-slider__progress">
                                                    <div class="cp-slider__heading">
                                                        Gather Insightful Data
                                                    </div>
                                                    <p class="cp-slider__desc">Collect data across multiple geographies and channels to gain in-depth insight into your customers’ behavior. Understand your customers’ payment flow better and deliver a more personalized experience.</p>
                                                </div>
                                                <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                                <div class="cp-slider__sep"></div>
                                            </div>
                                            <div class="cp-slider__item">
                                                <div class="cp-slider__progress">
                                                    <div class="cp-slider__heading">
                                                        Simplify Payments
                                                    </div>
                                                    <p class="cp-slider__desc">Make it convenient for your customers and give the choice of credit cards or SEPA bank transfers without compromising on safety</p>
                                                </div>
                                                <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Slider Section
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Media Section
                ====================================================================================== -->
                <section class="cp-l-main__row">
                    <div class="cp-medias">
                        <div class="container">
                            <div class="cp-medias__title">Considerations for the <br class="hidden-xs hidden-sm"> Chargebee+Adyen integration</div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="cp-media">
                                        <div class="cp-media__icon">
                                            <figure>
                                                <img width="28" src="/static/website/version/images/payment-gateways/adyen/suit-case.svg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="cp-media__content">
                                            <h3 class="cp-media__title">Supported Markets</h3>
                                            <p class="cp-media__desc">Asia- Pacific, Europe, America</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cp-media">
                                        <div class="cp-media__icon">
                                            <figure>
                                                <img width="28" src="/static/website/version/images/payment-gateways/adyen/globe.svg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="cp-media__content">
                                            <h3 class="cp-media__title">Suited Business Type</h3>
                                            <p class="cp-media__desc">Mid to enterprise merchants catering to international markets</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cp-media">
                                        <div class="cp-media__icon">
                                            <figure>
                                                <img width="28" src="/static/website/version/images/payment-gateways/adyen/payment.svg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="cp-media__content">
                                            <h3 class="cp-media__title">Payment Frequency</h3>
                                            <p class="cp-media__desc">Recurring payments are supported along with one-time payments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Media Section
                ====================================================================================== -->
                <!-- =====================================================================================
                Start: Block Section
                ====================================================================================== -->
                <section class="cp-l-main__row">
                    <div class="cp-blocks">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="cp-blocks__title">Reach More <br class="hidden-xs hidden-sm">Global Subscribers Easily</div>
                                </div>
                            </div>
                            <div class="cp-block">
                                <div class="row">
                                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1"> 
                                        <img src="/static/website/version/images/recurring-payments/payment-methods/bank-based-payment-methods.png" class="img-responsive" alt="Try it yourself" />
                                    </div>
                                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                                        <div class="cp-block__content">
                                            <h3 class="cp-block__title visible-lg visible-md">
                                               Open up to New Markets with Local Payment Methods
                                            </h3>
                                            <p class="cp-block__desc"> 
                                                Don’t limit your payment options to just credit cards. Customers in Europe prefer to pay using bank-based payment methods that work directly with their bank accounts. With the Chargebee and Adyen combo, you can accept payments through iDEAL, Sofort, Giropay, Dotpay, and Bancontact. Expand your reach to customers in Germany, Austria, Switzerland, Sweden, Belgium, Poland, Netherlands, and many more countries across the EU. You can convert one-time bank payments into recurring payments using SEPA Direct Debit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-block">
                                <div class="row">
                                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                                        <div class="cp-block__content">
                                            <h3 class="cp-block__title visible-lg visible-md">
                                                Focus on the Perfect Checkout
                                            </h3>
                                            <p class="cp-block__desc">
                                                Optimize your checkout flow by focusing on the user experience. Showcase your brand voice and let Adyen and Chargebee handle PCI compliance, tokenization and all the other details to help your customers convert in minutes and not weeks.
                                            </p>
                                            <div class="cp-block__action">
                                                <a href="/recurring-payments/checkout-experience/">Read more about the Chargebee Checkout Experience → </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                                        <div class="cp-block__align--top">
                                           <!--  <h3 class="cp-block__title visible-xs visible-sm">
                                                Focus on the Perfect Checkout
                                            </h3> -->
                                            
                                            <div class="cd-panel">
                                                <div class="cd-panel-border"><span></span><span></span></div>
                                                <div class="cd-box theme1" id="card-component"></div>
                                                <div class="cd-panel-border"><span></span><span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 42px;">
                                    <div class="col-md-4 col-lg-5 hidden-xs hidden-sm">
                                        <img src="/static/website/version/images/product/common/try-it-yourself.svg" class="img-responsive" alt="Try it yourself"  style="margin-right: 0; margin-left: auto;"/>
                                    </div>
                                    <div class="col-sm-12 col-md-8 col-lg-7">
                                        <div>
                                            <div class="cd-styl">
                                                <div class="cd-styl-contain">
                                                    <div class="cd-styl-group">
                                                        <div class="cd-styl-label">End-to-end Styling</div>
                                                        <div class="cd-styl-radios">
                                                            <span id="theme1" class="cd-styl-radio is-active"></span>
                                                            <span id="theme2" class="cd-styl-radio"></span>
                                                        </div>
                                                    </div>
                                                    <div class="cd-styl-group">
                                                        <div class="cd-styl-label">Customizable Languages</div>
                                                        <div class="cd-styl-checks">
                                                            <span id="en" class="cd-styl-check is-active">English</span>
                                                            <span id="fr" class="cd-styl-check">French</span>
                                                            <span id="es" class="cd-styl-check">Spanish</span>
                                                            <span id="de" class="cd-styl-check">German</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-block">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3 class="cp-block__title visible-xs visible-sm">
                                            Automated Invoicing
                                        </h3>
                                        <img src="/static/website/version/images/payment-gateways/adyen/cb-invoice.png" class="img-responsive" alt="">
                                    </div>
                                    <div class="col-md-5">
                                        <div class="cp-block__content">
                                            <h3 class="cp-block__title visible-lg visible-md">
                                                Automated Invoicing
                                            </h3>
                                            <p class="cp-block__desc">
                                                With the Chargebee and Adyen duo, send out beautiful, branded invoices with all the essentials. Get the invoices reconciled as soon as payment is received. 
                                            </p>
                                            <div class="cp-block__action">
                                                <a href="https://www.chargebee.com/recurring-billing-invoicing/anatomy-of-an-invoice/">Take a tour → </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-block">
                                <div class="row">
                                    <div class="col-md-5 col-md-offset-1 col-md-push-6 col-lg-5 col-lg-offset-1 col-lg-push-6">
                                        <h3 class="cp-block__title visible-xs visible-sm">
                                            Churn Management
                                        </h3>
                                        <img src="/static/website/version/images/payment-gateways/adyen/dunning-system.png" class="img-responsive" alt="">
                                    </div>
                                    <div class="col-md-5 col-md-offset-1 col-md-pull-6 col-lg-5 col-lg-offset-1 col-lg-pull-6">
                                        <div class="cp-block__content">
                                            <h3 class="cp-block__title visible-lg visible-md">
                                                Churn Management
                                            </h3>
                                            <p class="cp-block__desc">
                                                Curb involuntary churn with optimized retry strategies for recurring payments. <a href="https://www.chargebee.com/recurring-payments/dunning-management/">Retry failed payments</a> at a suited time based on your customers’ transaction history. Send email notifications decoupled from retry attempts that don’t annoy customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Block Section
                ====================================================================================== -->
                <!-- =====================================================================================
                Start Scrollspy Section
                ====================================================================================== -->
                <section class="cp-l-main__row">
                    <div class="cp-scrollspy">
                        <div id="before-affix"></div>
                        <!-- ==================================================================
                        scrollspy Part start 
                        =================================================================== -->
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-6 hidden-sm hidden-xs">
                                    <!-- ===================================================
                                    Affix title Part start 
                                    ==================================================== -->
                                    <div class="cp-scrollspy__header" data-affix-after="#before-affix" id="ca-nav-affix">
                                        <div>
                                            <div class="cp-scrollspy__label">Explore international markets with Adyen.</div>
                                            <div class="cp-scrollspy__title">Conquer Subscriptions <br class="hidden-xs"> with Chargebee.</div>
                                        </div>
                                    </div>
                                    <!-- ===================================================
                                    scrollspy title Part start 
                                    ==================================================== -->
                                </div>
                                <div class="col-sm-8 col-md-6">
                                    <!-- ===================================================
                                    scrollspy content Part start 
                                    ==================================================== -->
                                    <div class="cp-scrollspy__body">
                                        <div class="cp-scrollspy__title visible-xs visible-sm">Conquer Subscriptions <br class="hidden-xs"> with Chargebee.</div>
                                        <ul class="cp-scrollspy__list">
                                            <li class="cp-scrollspy__item">
                                                <h3 class="cp-scrollspy__heading">
                                                    Speak Your Customers’ Language
                                                </h3>
                                                <p class="cp-scrollspy__desc">
                                                    Tailor the billing experience around your customers' local language. With Chargebee and Adyen, <a href="https://www.chargebee.com/docs/configure-multiple-languages.html">localize</a> email notifications, invoices, customer portal, and checkout pages easily.
                                                </p>
                                            </li>
                                            <li class="cp-scrollspy__item">
                                                <h3 class="cp-scrollspy__heading">
                                                    Automated Taxes
                                                </h3>
                                                <p class="cp-scrollspy__desc" >
                                                    Navigate through <a href="https://www.chargebee.com/recurring-billing-invoicing/saas-sales-tax/">tax regulations</a> easily with Chargebee and Adyen. Global tax profiles are applied automatically based on your customer’s billing or shipping address. You can apply multiple taxes that cater to specific regions. Let global tax rules be one less thing to worry about.
                                                </p>
                                            </li>
                                            <li class="cp-scrollspy__item">
                                                <h3 class="cp-scrollspy__heading">
                                                    GAAP Compliant Revenue Recognition 
                                                </h3>
                                                <p class="cp-scrollspy__desc" >
                                                    <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/">Recognize revenue</a> every month, determine pending revenue to be recognized for a subscription period and obtain a monthly account summary report with Chargebee and Adyen.
                                                </p>
                                            </li>
                                            <li class="cp-scrollspy__item">
                                                <h3 class="cp-scrollspy__heading">
                                                    Track Key Metrics with RevenueStory
                                                </h3>
                                                <p class="cp-scrollspy__desc" >
                                                    With <a href="https://revenuestory.io/">RevenueStory</a>, gain real-time insights into your business’s performance with slice and dice reporting. Review metrics that really matter to your business and power up your strategies to gain momentum in growth. From checking your MRR to ARR, or getting churn reports, build a dashboard that’s customized just for your business.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- ===================================================
                                    scrollspy content Part start 
                                    ==================================================== -->
                                </div>
                            </div>
                        </div>
                        <!-- ==================================================================
                        scrollspy Part end 
                        =================================================================== -->
                    </div>
                </section>
                <!-- =====================================================================================
                End: Scrollspy Section
                ====================================================================================== -->
                <div id="pg-affix-footer">
                    <!-- =====================================================================================
                    Start: Clients Section
                    ====================================================================================== -->
                    <section class="cp-l-main__row">
                        <div class="cp-clients">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                        <div class="cp-clients__container">
                                            <div class="cp-label cp-label--logo">
                                                <figure class="cp-label__img">
                                                    <img width="24" src="/static/website/version/images/payment-gateways/adyen/chargebee.svg" alt="">
                                                </figure>
                                                <div class="cp-label__text">Integrations</div>
                                            </div>
                                            <div class="cp-clients__title">
                                                Connect Chargebee with apps you use daily <br class="hidden-xs hidden-sm">and make your workflow better
                                            </div>
                                            <ul class="cp-clients__logos">
                                                <li class="cp-clients__logo"><img class="img-responsive" src="/static/website/version/images/payment-gateways/adyen/freshdesk.png" style="margin-top: 7px" alt="" width="155" /></li>
                                                <li class="cp-clients__logo hidden-xs"><img class="img-responsive" src="/static/website/version/images/payment-gateways/adyen/refersion.png" style="margin-top: -7px" alt="" width="136" /></li>
                                                <li class="cp-clients__logo"><img class="img-responsive" src="/static/website/version/images/payment-gateways/adyen/mailchimp.png" alt="" width="166" /></li>
                                                <li class="cp-clients__logo"><img class="img-responsive" src="/static/website/version/images/payment-gateways/adyen/slack.png" alt="" width="118" /></li>
                                            </ul>
                                            <a href="https://www.chargebee.com/integrations/" class="cp-clients__action">View all integrations →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =====================================================================================
                    End: Clients Section
                    ====================================================================================== -->
                    <!-- =====================================================================================
                    Start: Payment Section
                    ====================================================================================== -->
                    <section class="cp-l-main__row">
                        <div class="cp-payment">
                            <div class="container">
                                <div class="cp-payment__body">
                                    <div class="row">
                                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                            <div class="cp-payment__container">
                                                <div class="cp-payment__content">
                                                    <div class="cp-payment__label"><a href="https://www.profitwell.com/blog/reduce-churn-profitwell-retain/">20-40%</a> of SaaS companies' churn stems from failed payments</div>
                                                    <div class="cp-payment__title">Setup a backup payment gateway <br class="hidden-xs"> and reduce involuntary churn</div>
                                                </div>
                                                <div class="cp-payment__dropdown">
                                                    <div class="cp-payment__droplabel">Learn more about</div>
                                                    <select name="" id="select_navigate" class="cp-payment__select">
                                                        <option value="/payment-gateways/adyen-recurring-payments">Adyen</option>
                                                        <option value="/payment-gateways/cybersource-recurring-billing">CyberSource</option>
                                                        <option value="/payment-gateways/stripe">Stripe</option>
                                                        <option value="/payment-gateways/braintree">Braintree</option>
                                                        <option value="/payment-gateways/paypal-recurring-payments">Paypal</option>
                                                        <option value="/payment-gateways/authorize-net">Authorize.net</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =====================================================================================
                    End: Payment Section
                    ====================================================================================== -->
                </div>
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
            $('.con__question-group ul > li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            // For Slider in page
            if($(window).width() > 767){
                $('.cp-slider__item:first-child').addClass('cp-slider__item-active');
                var activeItem;
                function slider(){
                    activeItem = $('.cp-slider__item-active').next('.cp-slider__item');
                    if(activeItem.length){
                        $('.cp-slider__item').removeClass('cp-slider__item-active');
                        $(activeItem).addClass('cp-slider__item-active');
                    }else{
                        $('.cp-slider__item').removeClass('cp-slider__item-active');
                        $('.cp-slider__item:first-child').addClass('cp-slider__item-active');
                    }
                }
                var startSlider = setInterval(slider, 4000);
                $('.cp-slider__item .cp-slider__heading').on('click', function(){
                    clearInterval(startSlider);
                    $('.cp-slider__item .cp-slider__heading').parents('.cp-slider__item').removeClass('cp-slider__item-active');
                    $(this).parents('.cp-slider__item').addClass('cp-slider__item-active').find('.cp-slider__progress').addClass('cp-slider__progress--hide');
                    //startSlider = setInterval(slider, 4000);
                })
            }
            // bind change event to select
            $('#select_navigate').on('change', function () {
                var url = $(this).val(); // get selected value
                if (url) { // require a URL
                    window.location = url; // redirect
                }
                return false;
            });

            // For Affix
            $('[data-affix-after]').each( function() {
                var elem = $(this);
                var parent_panel = elem.parent();
                var prev = $( elem.data('affix-after') );

                if( prev.length != 1 ) {
                /* Create a new element immediately before. */
                prev = elem.before( '<div></div>' ).prev();
                }

                var resizeFn = function() {
                /* Set the width to it's natural width in the parent. */
                var sideBarNavWidth = parent_panel.width()
                    - parseInt(elem.css('paddingLeft'))
                    - parseInt(elem.css('paddingRight'))
                    - parseInt(elem.css('marginLeft'))
                    - parseInt(elem.css('marginRight'))
                    - parseInt(elem.css('borderLeftWidth'))
                    - parseInt(elem.css('borderRightWidth'));
                elem.css('width', sideBarNavWidth);

                elem.affix({
                    offset: {
                        top: prev.offset().top + prev.outerHeight(true) - 20,
                        bottom: function () {
                            return (this.bottom = $('#pg-affix-footer').outerHeight(true) + $('.l-footer').outerHeight(true) + 20)
                        }
                    }
                });
                };

                resizeFn();
                    $(window).resize(resizeFn);
            });

            let cbInstance = Chargebee.init({
                site: "moments-test",
                publishableKey: "test_eQ8cdPrlb5ZDnntOFcnoq0sZnDDksyzBO"
            });

            // Set Portal session
            if(window.fetch) {
                cbInstance.setPortalSession(function() {
                    return fetch("https://recur.in/api/moments-test/create_portal_session?customer_id=cbdemo_dave", {
                    method: "POST",
                    mode: "cors"
                    }).then((response) =>{
                    if (response.status >= 200 && response.status < 300) {
                        return Promise.resolve(response.json())
                    } else {
                        return Promise.reject(new Error("could not fetch portal session object"))
                    }
                    });
                });
            }

            // Get relevant portal section
            function getSection(option) {
                switch (option) {
                case "account":
                    return Chargebee.getPortalSections().ACCOUNT_DETAILS;
                case "subscription":
                    return Chargebee.getPortalSections().SUBSCRIPTION_DETAILS;
                case "address":
                    return Chargebee.getPortalSections().ADDRESS;
                case "payment_sources":
                    return Chargebee.getPortalSections().PAYMENT_SOURCES;
                case "billing_history":
                    return Chargebee.getPortalSections().BILLING_HISTORY;
                }  
            }

            // Open Portal
            function open(option, params) {
                Chargebee.getInstance()
                .createChargebeePortal()
                .openSection({
                    sectionType: getSection(option), 
                    params: params || {}
                });
            }

            $('[open_subscription_details]').on('click', function(){
                open("subscription", {subscriptionId: '1mbDWVgRRBSS8m1WBR'})
            })

            $('[open_manage_payments]').on('click', function(){
                open("payment_sources")
            })

            $('[open_billing_history]').on('click', function(){
                open("billing_history")
            })

            $('[open_manage_addresses]').on('click', function(){
                open("address")
            })

            $('[open_account_info]').on('click', function(){
                open("account")
            })

            $(window).on('load', function(){
                setTimeout(function(){
                    $('.ms-hero__highlight').addClass('ms-hero__highlight--active');
                    $('.ms-article__highlight').addClass('ms-article__highlight--active')
                }, 750)
            })
            
            $('.goToArticle').on('click', function(){
                $('html, body').animate({
                    scrollTop: $(".ms-media").offset().top
                }, 500);
            })

            var cardComponent;
            const themeIds = ['theme1', 'theme2']
            const locales = ['en', 'fr', 'es', 'de']
            const ThemePalette = {
              theme2: {
                'main-bg': '#262E3A',
                'secondary-bg': '#3e4b5b',
                'main-text': '#fff',
                'placeholder': '#939aa3',
                'placeholder-focused': '#ccc',
                'primary-btn': '#6EEDB6',
                'btn-text': '#1C2026',
                'primary-btn-focus': 'rgb(70, 203, 145)',
                'invalid': '#FF7C4A',
                'invalid-focused': '#e44d5f',
                'invalid-placeholder': '#FFCCA5',
              },
              theme1: {
                'main-bg': '#D5DBE7',
                'secondary-bg': '#fff',
                'main-text': '#000',
                'placeholder': '#abacbe',
                'placeholder-focused': '#abacbe',
                'primary-btn': '#4773D2',
                'btn-text': '#fff',
                'primary-btn-focus': '#3361c3',
                'invalid': '#E94745',
                'invalid-focused': '#e44d5f',
                'invalid-placeholder': '#FFCCA5'
              }
            }

             themeIds.map(themeId => {
              const button = document.getElementById(themeId)
              button.onclick = (e) => {
                themeIds.map(theme => {
                  const themeButton = document.getElementById(theme)
                  themeButton.classList.toggle('is-active', false)
                })
                const clickedButton = e.target;
                clickedButton.classList.toggle('is-active', true)
                changeTheme(themeId);
              }
            })

            locales.map(locale => {
              const button = document.getElementById(locale)
              button.onclick = (e) => {
                locales.map(locale => {
                  const localeButton = document.getElementById(locale)
                  localeButton.classList.toggle('is-active', false)
                })
                const clickedButton = e.target;
                clickedButton.classList.toggle('is-active', true)
                changeLocale(e);
              }
            })

            // Change theme
            function changeTheme(theme) {
              const el = document.getElementById('card-component')
              themeIds.map(themeId => {
                el.classList.toggle(themeId, false)
              })
              el.classList.toggle(theme, true)
              const options = {
                style: getIframeStyles(ThemePalette[theme])
              }
              cardComponent.update(options);
            }
            
            // Change locale
            function changeLocale(e) {
              const locale = e.target.id;
              cardComponent.update({locale});
            }

            function getIframeStyles(theme) {
              return {
                base: {
                  color: theme['main-text'],
                  fontWeight: '500',
                  fontFamily: 'Lato,-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif',
                  fontSize: '16px',
                  fontSmoothing: 'antialiased',
                  iconColor: theme['main-text'],

                  ':focus': {
                    // color: '#424770',
                  },

                  '::placeholder': {
                    color: theme['placeholder'],
                  },

                  ':focus::placeholder': {
                    color: theme['placeholder-focused'],
                  },
                },
                invalid: {
                  iconColor: theme['invalid'] || '#FF7C4A',
                  color: theme['invalid'] || '#FF7C4A',

                  '::placeholder': {
                    color: theme['invalid-placeholder'] || '#FFCCA5',
                  },
                },
              }
            }

            function getOptions(theme) {
              return {
                fonts: [
                  'https://fonts.googleapis.com/css?family=Lato:300,500,600'
                ],
                locale: 'en',
                classes: {
                  focus: 'focus',
                  invalid: 'invalid',
                  empty: 'empty',
                  complete: 'complete',
                },
                style: getIframeStyles(ThemePalette[theme])
              }
            }

            cbInstance.load('components').then(() => {
              const options = getOptions('theme1');
              cardComponent = cbInstance.createComponent('card', options)
              cardComponent.mount('#card-component')
            })
        },
        methods: {}
	}
</script>
<style>
    #ch-js-header-cloned{
        display: none;
    }

    .affix { top: 20px; }
    .affix-bottom { position: absolute; }
    .cd-box{
        padding: 16px 20px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.16), 2px 4px 8px rgba(0, 0, 0, 0.16);
        display: block;
        width: 100%;
        border: 0;
        margin: 24px 0;
    }        
    .cd-panel{
        position: relative;
        margin-bottom: 16px;
    }
    .cd-panel::before,
    .cd-panel:after{
        content: '';
        height: 40px;
        position: absolute;
        z-index: 1;
        left: -10px;
        right: -10px;  
        top: -2px;
        background-image:linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0.4));
    }
    .cd-panel:after{
        top: auto;
        bottom: -2px;
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgb(255, 255, 255));
    }
    .cd-panel-border{
        margin-left: -16px;            
        font-size: 0;
    }
    .cd-panel-border span{
        display: inline-block;
        width: 50%;
        height: 100px;
        padding-left: 16px;            
    }
    .cd-panel-border span:before{
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        border: 1px dashed #ddd;
    }
    .cd-styl{
        padding: 24px 32px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
        display: block;
        width: 100%;
        border: 0;
        position: relative;            
    }
    .cp-block__align--top{
        margin-top: 90px !important; 
    }
    @media (min-width: 992px) {
        .cd-styl-contain{
            display: flex;            
        }
    }
    @media (max-width: 980px) {
        .cp-block__align--top{
           margin-top: 20px !important;  
        }
    }
    @media (max-width: 991px) {
        .cd-styl-group{
            margin-right: 0;
            padding-right: 0;
        }
        .cd-styl-group:not(:last-child){
            margin-bottom: 24px;
        }
        .cd-styl{
            padding: 16px 24px;
        } 
    }
    .cd-styl-group{
        padding-right: 32px;
    }
    .cd-styl-label{
        margin-bottom: 16px;
    }
    .cd-styl-radio{
        width: 24px;
        height: 24px;
        display: inline-block;
        background: #fff;            
        margin-right: 12px;
        border-radius: 50%;     
        cursor: pointer;
        border: 1px solid #3e4b5b;  
    }
    .cd-styl-radio.is-active{
        box-shadow: 0 0 0px 4px #000009;
    }
    .cd-styl-radio:last-child{
        background: #3e4b5b;
    }
    .cd-styl-checks{
        display: flex;
        border-radius: 4px;
        color: #0022e6; 
    }
    .cd-styl-check{
        padding: 8px 16px;
        position: relative;  
        cursor: pointer;              
        background: #f4f7fc;     
    }
    .cd-styl-check.is-active{
        color: #000009;
        box-shadow: 0px 0 0 1px #000, 0 1px  0 1px #000;
        z-index: 2;
        background: #fff;
        border-radius: 4px;
    }
    @media (max-width: 767px) {
        .cd-styl-check{
            padding: 6px 8px;
            font-size: 14px;
        }
        .ms-hero__actions{
            display: block;
        }
        .ms-btn{
            margin-left: auto;
            margin-right: auto;
        }
        .cd-styl-group{
            padding-right: 0;
        }
    }
    @media (max-width: 479px) {
        .cd-styl-checks{
            display: block;
        }
        .cd-styl-check{
            padding: 6px 8px;
            font-size: 14px;
            display: inline-block;
            width: 80px;
            text-align: center;
            margin: 8px 4px;
        }
    }

    .theme2 {
        background-color: #3E4B5B;
    }

    .theme1 {
        background-color: #fff;
    }
</style>