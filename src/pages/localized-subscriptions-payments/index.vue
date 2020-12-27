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
        :cb-title="'Localized Subscription Billing and Management for your customers across the globe | Chargebee'"
        :cb-desc="'With Chargebee\'s subscription management platform, get an extensive support for international languages, local currencies, multiple payment methods and gateways, global taxes and more in your billing system.'"
        :cb-url="'/localized-subscriptions-payments/'"
        :cb-image="''"
        :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/localization.css'"
        :cb-head-script="''"
        :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js,/static/website/version/scripts/rellax.min.js'"
        :cb-has-noindex="false"
        :cb-region-list="''"
        :cb-region-url="''" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" :hasBasicHeader="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <!-- =====================================================================================
            Content Part Start
            ====================================================================================== -->
            <main class="l-main">
                <!-- =====================================================================================
                Start: Section -- A
                ====================================================================================== -->
                <section class="ln-section ln-section--hero">
                    <div class="container">
                        <div class="row ln-dflex ln-dflex--vcenter">
                            <div class="col-sm-8 col-sm-offset-1 col-md-6">
                                <!-- =======================================================
                                Start: Section Article
                                ======================================================== -->
                                <div class="ln-heroarticle">
                                    <div class="ln-heroarticle__header">
                                        <h1 class="ln-heroarticle__title"><strong>Make your Subscriptions Go Global on Day One</strong></h1>
                                    </div>

                                    <div class="ln-heroarticle__content">
                                        <img class="img-responsive visible-xs" style="width: 365px; margin: 20px 0 30px;" src="/static/website/version/images/localization/hero-image.png">
                                        <p class="ln-heroarticle__desc">As your subscriptions begin to scale to newer territories, you can show a deeper level of personalization.</p>
                                    </div>

                                    <div class="ln-heroarticle__footer">
                                        <div class="ln-heroarticle__actions">
                                            <a href="/trial-signup/" class="ln-heroarticle__anchor ln-btn ln-btn--arrow">
                                                <span>Sign up for free</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Section Article
                                ======================================================== -->
                            </div>

                            <div class="col-sm-5">
                                <img class="img-responsive hidden-xs" style="width: 365px;" src="/static/website/version/images/localization/hero-image.png">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- A
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Section -- B
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
                                <div class="ln-article text-center ln-mB__xs">
                                    <div class="ln-article__header">
                                        <h2 class="ln-article__subtitle">
                                            From global tax and data compliances to native currency and language support. Earn the trust of your customers. <br class="visible-sm">From any corner of the world.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-4 col-sm-offset-1">
                                <img class="img-responsive hidden-xs" style="width: 292px;" src="/static/website/version/images/localization/hola.png">
                            </div>

                            <div class="col-sm-5 col-sm-offset-1">
                                <div class="ln-article ln-mB__xs">
                                    <div class="ln-article__header">
                                        <div class="ln-article__title">
                                            Language as an enabler. Not an impediment.
                                        </div>
                                    </div>

                                    <div class="ln-article__content">
                                        <img class="img-responsive visible-xs" style="width: 180px;  margin: 20px 0 30px 30px;" src="/static/website/version/images/localization/hola.png">
                                        <div class="ln-article__desc">
                                            Don’t let the limits of language limit how far you can sell. With Chargebee’s multi-lingual support, you can make your customers feel at home and communicate with them in Italian, Spanish, German, French, Portuguese and more, apart from English.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- B
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Cause Study
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="ln-causestudy">
                                    <a href="/customers/freshdesk/" class="ln-causestudy__link">
                                        <!-- <div class="ln-causestudy__left">
                                            <div class="ln-causestudy__label">
                                                CASE STUDY
                                            </div>
                                            <div class="ln-causestudy__title">
                                                The story on how Freshdesk unlocked scale from 800 to 50000 customers
                                            </div>
                                        </div> -->
                                        <div class="ln-causestudy__right">
                                            <div class="ln-causestudy__logo">
                                                <img src="/static/website/version/images/localization/freshworks.png" class="img-responsive" width="154" />
                                            </div>
                                            <div class="ln-causestudy__desc">
                                                “For a customer driven SaaS business, you need a reliable system like Chargebee that takes care of the latter.”
                                            </div>
                                            <div class="ln-causestudy__author">
                                                Kiran Darisi, Co-Founder, Dir. of DevOps
                                            </div>
                                            <div class="ln-causestudy__action">
                                                READ THE STORY →
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Cause Study
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Section -- E
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-sm-offset-1 col-md-5 hidden-xs hidden-sm">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="ln-article" id="nav">
                                    <div class="ln-article__header">
                                        <h3 class="ln-article__title">
                                            Think about how your <br class="hidden-xs">customers want to pay you
                                        </h3>
                                    </div>

                                    <div class="ln-article__content">
                                        <p class="ln-article__desc" style="max-width: 365px;">
                                            How you price your product and how you let them pay impacts your customers’ perceptions, irrespective of where they are. Don’t simply get paid. Build lasting relationships.
                                        </p>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                            </div>

                            <div class="col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0">
                                <div class="ln-mT__xxs visible-xs visible-sm"></div>
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="ln-article visible-xs visible-sm">
                                    <div class="ln-article__header">
                                        <h3 class="ln-article__title">
                                            Think about how your <br class="hidden-xs">customers want to pay you
                                        </h3>
                                    </div>

                                    <div class="ln-article__content">
                                        <p class="ln-article__desc" style="max-width: 365px;">
                                            How you price your product and how you let them pay impacts your customers’ perceptions, irrespective of where they are. Don’t simply get paid. Build lasting relationships.
                                        </p>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="ln-features">
                                    <div class="ln-features__list">
                                        <div class="ln-feature">
                                            <div class="ln-feature__content">
                                                <h4 class="ln-feature__title">Expand with multi-currency support</h4>
                                                <p class="ln-feature__desc">Buyers are hardwired to convert the price of a product or service into their native currency to see how much it is actually going to cost them. From the Australian Dollar to Euro, from Japanese Yen to Mexican Peso, Chargebee’s multi-currency support lets you get paid in 100+ native currencies from anywhere in the world.</p>
                                            </div>
                                            <div class="ln-feature__footer">
                                                <a class="ln-link" href="/recurring-payments/multicurrency/">Learn more &rarr;</a>
                                            </div>
                                        </div>

                                        <div class="ln-feature">
                                            <div class="ln-feature__content">
                                                <h4 class="ln-feature__title">Increase your global Footprint with multiple gateways</h4>
                                                <p class="ln-feature__desc">Chargebee supports a host of payment gateways with which you can get an account and start processing payments in no time. Boost your avenues of payment with Chargebee’s 30+ payment gateway integrations such as Stripe, Braintree, Authorize.net, GoCardless, PayPal, and more.</p>
                                            </div>
                                            <div class="ln-feature__footer">
                                                <a class="ln-link" href="/recurring-payments/">Learn more &rarr;</a>
                                            </div>
                                        </div>

                                        <div class="ln-feature">
                                            <div class="ln-feature__content">
                                                <h4 class="ln-feature__title">Support Multiple Payment Methods</h4>
                                                <p class="ln-feature__desc">Don’t let the lack of payment options limit your reach. Benefit from a plethora of global payment options, and break barriers to sell globally. Let your customers pay via cards, checks, direct debit, ACH, or even wallets. Chargebee supports Multiple Payment Methods. With a Backup Payment Method, if a payment method fails, Chargebee will try another.</p>
                                            </div>
                                            <div class="ln-feature__footer">
                                                <a class="ln-link" href="/recurring-payments/payment-methods/">Learn more &rarr;</a>
                                            </div>
                                        </div>

                                        <div class="ln-feature">
                                            <div class="ln-feature__content">
                                                <h4 class="ln-feature__title">Intelligent Routing</h4>
                                                <p class="ln-feature__desc">Facilitate global transactions at scale. Connect multiple accounts of the same payment gateway with the Smart Routing feature. You can configure rules for automatically picking a gateway account based on the payment method that the customer chooses and the currency of the transaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- E
                ====================================================================================== -->
                <div id="pg-affix-footer">
                <!-- =====================================================================================
                Start: Payment gateway
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <a href="/payment-gateways/stripe/" class="ln-cta ln-cta--as-button">
                                    <div class="ln-cta__header">
                                        <div class="ln-cta__thumb">
                                            <img class="img-responsive" src="/static/website/version/images/localization/pg/stripe.png">
                                        </div>
                                    </div>
                                    <div class="ln-cta__content">
                                        <div class="ln-cta__label">3000+ businesses use Chargebee to <span style="color: #6200EA;">do more with Stripe →</span></div>
                                    </div>
                                </a>

                                <div class="ln-paygateways ln-mB__m">
                                    <!-- <div class="ln-paygateways__list">
                                        <div class="ln-paygateway">
                                            <div class="ln-paygateway__thumb">
                                                <img class="ln-paygateway__img img-responsive" style="max-width: 68px;" src="/static/website/version/images/localization/pg/paypal.png">
                                            </div>
                                        </div>

                                        <div class="ln-paygateway">
                                            <div class="ln-paygateway__thumb">
                                                <img class="ln-paygateway__img img-responsive" style="max-width: 106px;" src="/static/website/version/images/localization/pg/braintree.png">
                                            </div>
                                        </div>

                                        <div class="ln-paygateway">
                                            <div class="ln-paygateway__thumb">
                                                <img class="ln-paygateway__img img-responsive" style="max-width: 118px;" src="/static/website/version/images/localization/pg/gocardless.png">
                                            </div>
                                        </div>

                                        <div class="ln-paygateway">
                                            <div class="ln-paygateway__thumb">
                                                <img class="ln-paygateway__img img-responsive" style="max-width: 104px;" src="/static/website/version/images/localization/pg/worldpay.png">
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="cj-slider cj-slider--billing">
                                        <div class="cj-slider__figure">
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
                                    </div>
                                    <div class="ln-paygateways__bottom">
                                        <div class="ln-paygateways__label">+27 other payment gateways in 53+ countries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Payment gateway
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Section -- E
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9 col-sm-offset-2 col-md-5 col-md-offset-1">
                                <div class="ln-article">
                                    <div class="ln-article__header">
                                        <h3 class="ln-article__title">
                                            Automate Global Tax <br class="hidden-xs">Compliance with Profiles
                                        </h3>
                                    </div>

                                    <div class="ln-article__content">
                                            <img class="img-responsive visible-xs visible-sm ln-mT__xxs ln-mB__xxs" src="/static/website/version/images/localization/map.png">
                                        <p class="ln-article__desc">
                                            Don’t let global tax rules confuse your business. Put an end to messy tax compliance with Chargebee’s multiple tax profiles feature to automate EU VAT, AU & NZ GST, US/Canada Sales Tax, and everything in between. The configuration of taxes in Chargebee is provided at a product/service level.
                                        </p>
                                        <div class="ln-feature__footer">
                                            <a class="ln-link" href="/recurring-billing-invoicing/saas-sales-tax/">Learn more &rarr;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <img class="img-responsive hidden-xs hidden-sm" src="/static/website/version/images/localization/map.png">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- E
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Cause Study
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="ln-causestudy">
                                    <a href="/customers/guavapass/" class="ln-causestudy__link">
                                        <!-- <div class="ln-causestudy__left">
                                            <div class="ln-causestudy__label">
                                                CASE STUDY
                                            </div>
                                            <div class="ln-causestudy__title">
                                                Learn how Guavapass expanded quickly to different countries and cities
                                            </div>
                                        </div> -->
                                        <div class="ln-causestudy__right">
                                            <div class="ln-causestudy__logo">
                                                <img src="/static/website/version/images/localization/guava-pass.png" class="img-responsive" width="154" />
                                            </div>
                                            <div class="ln-causestudy__desc">
                                                Switching to Chargebee has helped us streamline our development resources. We're now able to experiment better and iterate much faster.
                                            </div>
                                            <div class="ln-causestudy__author">
                                                Justin Louie, CTO
                                            </div>
                                            <div class="ln-causestudy__action">
                                                READ THE STORY →
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Cause Study
                ====================================================================================== -->

                <!-- =====================================================================================
                Start: Section -- F
                ====================================================================================== -->
                <section class="ln-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div class="ln-cta">
                                    <div class="ln-cta__header">
                                        <div class="ln-cta__title">
                                            Subscriptions at Scale. Globally. <br class="hidden-xs"> With Chargebee
                                        </div>
                                    </div>

                                    <div class="ln-cta__footer">
                                        <div class="ln-cta__actions">
                                            <a href="/trial-signup/" class="ln-cta__anchor ln-btn ln-btn--arrow"><span>Sign up for free</span> </a>
                                            <a href="/schedule-a-demo/" class="ln-cta__anchor ln-link">Schedule a demo &rarr;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- F
                ====================================================================================== -->
                </div>
            </main>
            <!-- =========================================================================================
            Content Part End
            ========================================================================================== -->
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
        // For Affix
        $('#nav').affix({
            offset: {
                top: $('#nav').offset().top,
                bottom: ($('#pg-affix-footer').outerHeight(true) + $('footer').outerHeight(true)) + 250
            }
        }).on('affix.bs.affix',function(){
            setAffixContainerSize();
        });

        /*Setting the width of the sidebar (I took 10px of its value which is the margin between cols in my Bootstrap CSS*/
        function setAffixContainerSize(){
            $('#nav').width($('#nav').parent().innerWidth()-10);
        }

        $(window).resize(function(){
            setAffixContainerSize();
        });
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
    #ch-js-header-cloned {
      display: none;
    }
    .affix-top {
        position: relative;
    }
    .affix {
        top: 0;
    }
    .affix-bottom {
        position: absolute;
    }
  </style>
  <!-- ===========================================================================
  End: Style Section
  ============================================================================ -->
