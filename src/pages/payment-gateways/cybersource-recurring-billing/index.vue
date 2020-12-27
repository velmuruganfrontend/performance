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
// app-header 		=	App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
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
        :cb-title="'Manage Subscription Payments with Chargebee and CyberSource'" 
        :cb-desc="'Let Chargebee take care of your recurring payments while CyberSource processes your high-value transactions. Easy to implement. Scalable. Secure.'" 
        :cb-url="'/payment-gateways/cybersource-recurring-billing/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/adyen.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
      <!-- ===================================================================
      End: Meta Section
      ==================================================================== -->
      <!-- ===================================================================
      Start: Header Section
      ==================================================================== -->
      <app-header :hasInvert="false" :hasBasicHeader="false" :hasBackToCareers="false" />
      <!-- ===================================================================
      End: Header Section
      ==================================================================== -->
      <!-- ===================================================================
      Start: Body Section
      ==================================================================== -->
      <div class="cb-body">
        <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="craftsybiz-test"></script>
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
                                        <div class="cp-label__text">Chargebee + CyberSource</div>
                                    </div>
                                    <h1 class="cp-hero__title">Create a Stellar Subscription Experience with <br class="hidden-xs">Chargebee and CyberSource</h1>
                                </div>
                                <div class="cp-hero__body">
                                    <p class="cp-hero__desc">Power payments with CyberSource and supercharge your subscriptions with Chargebee.</p>
                                    <div class="cp-hero__actions">
                                        <div class="cp-hero__action"><a href="/trial-signup/" class="btn btn-primary-sec">Sign up for free →</a></div>
                                        <div class="cp-hero__action"><a href="/schedule-a-demo/" class="btn btn-flat">Schedule a Demo →</a></div>
                                    </div>
                                </div>
                                <div class="cp-hero__footer">
                                    <p class="cp-hero__message">Using CyberSource as a payment gateway plugged into Chargebee, subscription businesses can easily accept online card payments.</p>
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
                                        Gain features that streamline subscription management and recurring payments.
                                    </div>
                                    <p class="cp-slider__label">Drive growth and increase customer satisfaction with Chargebee on top of CyberSource.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cp-slider__body">
                                    <div class="cp-slider__container">
                                        <div class="cp-slider__item">
                                            <div class="cp-slider__progress">
                                                <div class="cp-slider__heading">
                                                    Smooth Checkout
                                                </div>
                                                <p class="cp-slider__desc">Reduce cart abandonment with PCI compliant hosted checkout pages.</p>
                                            </div>
                                            <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                            <div class="cp-slider__sep"></div>
                                        </div>
                                        <div class="cp-slider__item">
                                            <div class="cp-slider__progress">
                                                <div class="cp-slider__heading">
                                                    Process Payments Worldwide
                                                </div>
                                                <p class="cp-slider__desc">Accept payments from anywhere at any time and expand your reach globally.</p>
                                            </div>
                                            <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                            <div class="cp-slider__sep"></div>
                                        </div>
                                        <div class="cp-slider__item">
                                            <div class="cp-slider__progress">
                                                <div class="cp-slider__heading">
                                                    Fraud Management
                                                </div>
                                                <p class="cp-slider__desc">De-risk your business from various online frauds and protect your customer relations. </p>
                                            </div>
                                            <a href="https://www.chargebee.com/recurring-payments/multicurrency/" class="cp-slider__action">See Chargebee supported currencies →</a>
                                            <div class="cp-slider__sep"></div>
                                        </div>
                                        <div class="cp-slider__item">
                                            <div class="cp-slider__progress">
                                                <div class="cp-slider__heading">
                                                    Payment Security
                                                </div>
                                                <p class="cp-slider__desc">Securely process online payments world over while delivering best-in-class customer experience.</p>
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
                        <div class="cp-medias__title">Considerations for the <br class="hidden-xs hidden-sm"> Chargebee+CyberSource integration</div>
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
                                        <p class="cp-media__desc">Asia Pacific, Europe, Latin America, and North America</p>
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
                                        <p class="cp-media__desc">Enterprise merchants expanding globally</p>
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
                                        <h3 class="cp-media__title">Payment Frequency and Type</h3>
                                        <p class="cp-media__desc">Recurring payments and one-time payments supported. Only Credit cards can be processed.</p>
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
                                <div class="cp-blocks__title">Automate Recurring <br class="hidden-xs hidden-sm">Billing to Scale Faster</div>
                            </div>
                        </div>
                        <div class="cp-block">
                            <div class="row">
                                <div class="col-md-5 col-md-offset-1 col-md-push-6 col-lg-5 col-lg-offset-1 col-lg-push-6">
                                    <div class="cp-block__align--top">
                                        <h3 class="cp-block__title visible-xs visible-sm">
                                            Reduce Friction and Increase Checkout Conversions
                                        </h3>
                                        <img src="/static/website/version/images/payment-gateways/adyen/cb-checkout.png" width="332" class="img-responsive cp-block__shadow--full" alt="">
                                    </div>
                                </div>
                                <div class="col-md-5 col-md-offset-1 col-md-pull-6 col-lg-5 col-lg-offset-1 col-lg-pull-6">
                                    <div class="cp-block__content">
                                        <h3 class="cp-block__title visible-lg visible-md">
                                            Reduce Friction and Increase Checkout Conversions
                                        </h3>
                                        <p class="cp-block__desc">
                                            Give your customers a truly global checkout experience with multiple languages and currencies. Track abandoned carts, enable quicker checkout with pre-filled customer details, and inculcate trust with branded and secure checkout pages with Chargebee and CyberSource. 
                                        </p>
                                        <div class="cp-block__action">
                                            <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="advanced-plan---monthly">See it in action → </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cp-block">
                            <div class="row">
                                <div class="col-md-5 col-md-offset-1">
                                    <h3 class="cp-block__title visible-xs visible-sm">
                                        Subscription Management for Multiple Use Cases
                                    </h3>
                                    <img style="margin: auto;" src="/static/website/version/images/payment-gateways/adyen/pricing-model.png" width="226" class="img-responsive" alt="">
                                </div>
                                <div class="col-md-5">
                                    <div class="cp-block__content">
                                        <h3 class="cp-block__title visible-lg visible-md">
                                            Subscription Management for Multiple Use Cases
                                        </h3>
                                        <p class="cp-block__desc">
                                            Join forces with Chargebee and CyberSource that adapts to multiple recurring billing scenarios. Create subscriptions with different billing dates, and pricing models- flat fee, per unit, volume, tiered, and stairstep. Integrate with a subscription management solution that is both adaptive and intuitive. 
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
                                        <div class="cp-scrollspy__label">Grow your business with CyberSource.</div>
                                        <div class="cp-scrollspy__title">Scale your subscriptions <br class="hidden-xs"> with Chargebee.</div>
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
                                    <div class="cp-scrollspy__title visible-xs visible-sm">Scale your subscriptions <br class="hidden-xs"> with Chargebee.</div>
                                    <ul class="cp-scrollspy__list">
                                        <li class="cp-scrollspy__item">
                                            <h3 class="cp-scrollspy__heading">
                                                Easy Setup and Low Maintenance
                                            </h3>
                                            <p class="cp-scrollspy__desc">
                                                From setting up <a href="https://www.chargebee.com/subscription-management/create-manage-plans/">plans</a> add-ons, <a href="https://www.chargebee.com/subscription-management/discount-management-system/">coupons</a>, currencies and more- Get started quickly with Chargebee and CyberSource. A simple-to-use <a href="https://www.chargebee.com/docs/subscription-billing-guide.html">subscription management</a> solution with minimal developer dependencies.
                                            </p>
                                        </li>
                                        <li class="cp-scrollspy__item">
                                            <h3 class="cp-scrollspy__heading">
                                                Automate Taxes and Manage Compliance Requirements Hassle-Free
                                            </h3>
                                            <p class="cp-scrollspy__desc" >
                                                Ever changing compliance regulations and <a href="https://www.chargebee.com/security/">PCI compliance</a>- Chargebee+CyberSource has your back. Maneuver through complicated <a href="https://www.chargebee.com/recurring-billing-invoicing/saas-sales-tax/">tax calculations</a> around US Sales Tax, Australian GST, EU VAT, and more that get automatically applied to invoices.
                                            </p>
                                        </li>
                                        <li class="cp-scrollspy__item">
                                            <h3 class="cp-scrollspy__heading">
                                                Attract and Engage Customers with Flexible Integrations
                                            </h3>
                                            <p class="cp-scrollspy__desc">
                                                Design a seamless experience for customers with a host of <a href="https://www.chargebee.com/integrations/">integrations</a> for improved team efficiency and reduced operational costs. Access tools like Mailchimp, Zendesk, Avalara, Zapier, Google Analytics, Salesforce and more, making work processes for teams easier. 
                                            </p>
                                        </li>
                                        <li class="cp-scrollspy__item">
                                            <h3 class="cp-scrollspy__heading">
                                                Minimize Churn and Retain Customers with Powerful Analytics 
                                            </h3>
                                            <p class="cp-scrollspy__desc" >
                                                Gather insights from real-time data in <a href="https://www.revenuestory.io/">RevenueStory</a>. Monthly recurring revenue, churn rate, customer lifetime value, revenue recognition and more - Accelerate growth for your subscription business with accurate reports on key metrics that matter most to your business.
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
                                                    <option value="/payment-gateways/cybersource-recurring-billing">CyberSource</option>
                                                    <option value="/payment-gateways/adyen-recurring-payments">Adyen</option>
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
    #ch-js-header-cloned{
        display: none;
    }
    .cp-scrollspy{
        margin-top: 20px;
    }
    .affix { top: 20px; }
    .affix-bottom { position: absolute; }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
