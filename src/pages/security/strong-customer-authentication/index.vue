<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta
      :cb-title="'Get PSD2 and SCA compliant with Chargebee'"
      :cb-desc="'Navigate through the complexities of strong customer authentication with Chargebee.'"
      :cb-url="'/security/strong-customer-authentication/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/product.css'"
      :cb-head-script="''"
      :cb-body-script="'https://js.hsforms.net/forms/v2.js'"
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
    <div class="gaussian">
    <!-- ===================================================================
    Start: Website Hero
    ==================================================================== -->
    <div id="cp-hero">
        <section class="cp-hero cp-hero--sbe cp-hero--esb">
            <div class="cp-hero__container align-screen-center">
                <div class="cp-hero__body">
                    <div class="cp-hero__header">
                        <div class="cp-hero__icon">
                            <img src="/static/website/version/images/product/icon/enterprise.svg" height="68" alt="chargebee" class="cp-hero__icon-size" />
                        </div>
                        <h1 class="cp-hero__title">
                            Get your Immunity Shot for PSD2 with Chargebee
                        </h1>
                        <p class="cp-hero__desc">
                            With a 3DS compliant checkout, smart recovery for SCA payment failures, and gateway-independence, Chargebee makes your SaaS immune to PSD2 pains.
                        </p>
                    </div>
                    <div class="cp-hero__actions">
                        <div class="cp-hero__action">
                            <a href="/schedule-a-demo/" class="cp-btn">Schedule a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- ====================================================================
    End: Website Hero
    ===================================================================== -->
    <section class="cp-navs">
        <div class="container">
        <!-- ----------------------------------------------------------------
        Start: Navigation For desktop
        ----------------------------------------------------------------  -->
        <!-- <div class="p-menu-parent">
            <div class="hidden-sm hidden-xs">
                <div class="p-menu p-menu--rp animated" id="p-menu-fixed">
                    <div class="p-menu__container">
                        <a href="/" class="p-menu__logo">
                            <img src="/static/resources/brand/chargebee-icon-black.svg" alt="Chargebee Logo" width="30">
                        </a>
                        <div class="p-menu__content">
                            <a href="/for-self-service-subscription-business/" class="p-menu__tab">
                                Chargebee for <br /> Self-serve
                            </a>
                            <a href="/for-high-growth-subscription-businesses/" class="p-menu__tab p-menu__tab--active">
                                Chargebee for <br /> Scale
                            </a>
                            <a href="/enterprise-subscription-billing/" class="p-menu__tab">
                                Chargebee for <br /> Enterprise
                            </a>
                            <a href="/for-subscription-finance-operations/" class="p-menu__tab">
                                Chargebee for <br /> SaaS Finance and Ops
                            </a>
                        </div>
                        <div class="p-menu__action">
                            <a cn-mark-signup="true" href="/trial-signup/" class="p-menu__signup">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="visible-xs visible-sm">
                <div class="p-menu p-menu--mobile">
                    <div class="selected-menu" id="selected-menu">
                        Chargebee for <br /> Scale
                    </div>
                    <div class="show-menu" id="show-menu">
                        <img src="/static/website/version/images/product/icon/mobile-menu-group.svg" width="28px" height="28px" />
                    </div>
                </div>
            </div>
        </div> -->
        <!-- ----------------------------------------------------------------
        End: Navigation For desktop
        ----------------------------------------------------------------  -->
        </div>
    </section>
    <div id="main-content">
    <!-- -------------------------------------------------------------------
    Start: Card on banner
    -------------------------------------------------------------------  -->
   <!--  <div class="container">
       <div class="row">
           <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <div class="cp-rack">
                    <div class="cp-rack__header">
                        <div class="cp-rack__figure">
                            <img src="/static/website/version/images/footer/security-chargebee-saas-billing.svg" alt="" class="img-responsive" style="min-width: 60px">
                        </div>
                        <div class="cp-rack__title">
                            Handle Strong Customer Authentication (SCA) <br class="visible-lg">with Chargebee
                        </div>
                    </div>
                    <div class="cp-rack__footer">
                        <div class="cp-rack__desc">
                            You don’t have to stress about being PSD2 ready - from SCA compliant checkout flows, to promptly applying exemptions, to handling 3DS payment failures, Chargebee’s got your back.
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div> -->
    <!-- -------------------------------------------------------------------
    End: Card on banner
    -------------------------------------------------------------------  -->
    <!-- ====================================================================
    Start: media
    ====================================================================  -->
    <section class="cp-media">
        <div class="container">
            <div class="cp-media__container">
                <div class="cp-media__aside">
                    <div class="cp-media__aside--img">
                        <img src="/static/website/version/images/product/common/creation.svg" width="39" />
                    </div>
                    Achieve <br>PSD2 Compliance
                </div>
                <div class="cp-media__main">
                    <div class="cp-media__list">
                        <div class="cp-media__item">
                            <strong>Support SCA payment flows</strong> with a built-in SCA compliant checkout page or create your own with Chargebee Moments.
                        </div>
                        <div class="cp-media__item">
                            <strong>Eliminate PSD2 related conversion risks</strong> by offering alternate payment methods like Direct Debit and eWallets.
                        </div>
                        <div class="cp-media__item">
                            <strong>Set up backup payment gateway(s)</strong> to de-risk your business from non-compliant payment gateways.
                        </div>
                        <div class="cp-media__item">
                            <strong>Save your business from payment failures</strong> with Smart Dunning processes to recover 3DS failed payments.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====================================================================
    End: Media
    ====================================================================  -->


   <!-- ------------------------------------------------------------------
    Start: Article
    --------------------------------------------------------------------->
    <section class="cp-article">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                    <div class="cp-article__body">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                                SCA Ready Checkout Flows
                            </h2>
                            <h3 class="cp-article__title">
                                Chargebee Checkout: Get Conversions <br class="visible-lg visible-md">Immune to SCA-related Dropoffs
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                    <div class="row">
                        <div class="col-md-7 col-md-push-5">
                            <div class="cp-article__figure">
                                <img src="/static/website/version/images/security/strong-customer-authentication/checkout.png" width="500" alt="saas-checkout-customer-portal" class="img-responsive" style="margin: 24px auto 0;">
                            </div>
                        </div>
                        <div class="col-md-5 col-md-pull-7">
                            <div class="cp-article__content">
                                <p class="cp-article__desc">
                                    SaaS businesses that do not support 3D Secure 2 flows on their checkout stand to lose 20% or more conversions due to dropoffs. Add that to the surge in SCA-related payment failures, and PSD2 can wreak havoc for European SaaS. Both Chargebee’s plug-and-play checkout and customizable Chargebee JS options keep you SCA compliant from Day Zero. Design the perfect high-converting checkout, and let Chargebee handle the compliance wizardry! 
                                </p>
                            </div>
                            <div class="cp-article__actions">
                                <div class="cp-article__action">
                                    <a href="/recurring-payments/checkout-experience/" class="cp-link cp-link--icon">
                                        Explore Chargebee’s Checkout 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div style="margin-top: 42px;">
                <a href="https://chargebee.drift.click/psd2-ama" target="_blank" class="cj-glow">
                    <div class="cj-glow__content">
                        Learn more on what PSD2 means to your subscription business and get your questions answered right away!
                    </div>
                </a>
            </div> -->


        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->
    <!-- -------------------------------------------------------------------
    Start: Footer Banner
    -------------------------------------------------------------------  -->
    <!-- <section class="cp-hero cp-hero--sbe cp-hero--esb" style="min-height: auto; margin-bottom: 42px;">
        <div class="cp-hero__container cp-hero__container--footer" >
            <div class="cp-hero__body">
                <div class="cp-hero__header" style="max-width: 760px;">
                    <h1 class="cp-hero__title">
                        Chargebee’s PSD2 Offer
                    </h1>
                    <p class="cp-hero__desc">
                        <strong>Upto 6 months off</strong> Chargebee’s plans for qualifying European SaaS businesses. <br>Get started quickly with dedicated white-glove migration assistance. <br>Migrate your customers' cards before <strong>September 14th</strong> to avoid SCA.
                    </p>
                </div>
                <div class="cp-hero__actions">
                    <div class="cp-hero__action">
                        <a href="javascript: void(0);" class="cp-btn cj-formbtn">Schedule a demo</a>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- -------------------------------------------------------------------
    End: Footer Banner
    -------------------------------------------------------------------  -->
    <!-- -------------------------------------------------------------------
    Start: Paper
    -------------------------------------------------------------------  -->
    <section class="cp-paper cp-paper--alt"  with_in_this_section>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div move_this>
                        <div class="cp-article__figure">
                            <img src="/static/website/version/images/security/strong-customer-authentication/payment-gateway.png" style="margin-left:auto;margin-right:auto;" width="600" alt="" class="img-responsive">
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0">
                    <div class="cp-article" style="margin-bottom: 0;">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                                De-risk from Payment Gateways
                            </h2>
                            <h3 class="cp-article__title" style="max-width: inherit;">
                                Multiple Gateways: Keep Revenue Immune to Gateway Risks
                            </h3>
                        </div>
                        <div class="cp-article__content">
                            <div move_here></div>
                            <p class="cp-article__desc" style="max-width: 450px;">
                                Your gateway decided to not support 3DS2 flows. Or perhaps doesn't do a great job in whitelisting your subscriber transactions. And let's not even get started about the code changes you need to make every time your gateway updates their APIs. Migrating to another gateway on short notice isn't easy. 
                            </p>
                            <p class="cp-article__desc" style="max-width: 450px;">
                                Chargebee lets you setup multiple payment gateways with easy backups. Setup fallback gateways in seconds without eating into your developer-time. Migrate into Chargebee so your business continues even if your gateway isn't PSD2 compliant. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Paper
    -------------------------------------------------------------------  -->
    <!-- -------------------------------------------------------------------
    Start: Article
    -------------------------------------------------------------------  -->
    <section class="cp-article cp-article--alt">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                    <div class="cp-article__body">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                                Multiple Payment Methods
                            </h2>
                            <h3 class="cp-article__title" style="max-width: none">
                                The Easiest Way is to Skip SCA: Avoid PSD2 Altogether
                            </h3>
                        </div>
                        <div class="cp-article__content">
                            <p class="cp-article__desc">
                               You shouldn't have to cry over customers churning because their payment failed 3DS2 checks. Offer payment methods that completely circumvent "credit cards" and the associated PSD2 nightmare. Let customers pay you through a mix of Direct Debit via SEPA and BACS, or eWallets like PayPal and Apple Pay so you remain untouched by SCA failures. 
                            </p>
                        </div>
                        <div class="cp-article__actions">
                            <div class="cp-article__action">
                                <a href="/recurring-payments/payment-methods/" class="cp-link cp-link--icon">
                                    Look at supported payment methods
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-1">
                    <div class="cp-article__body cp-article__body--xs">
                        <div class="cp-article__header">
                            <h2 class="cp-article__label">
                              Failed Payments Recovery
                            </h2>
                            <h3 class="cp-article__title">
                                A Smarter Way to Rescue Revenue
                            </h3>
                        </div>
                        <div class="cp-article__content">
                            <p class="cp-article__desc" style="max-width: 400px;">
                                Payment retries. Email reminders. You don’t have to break your head over a game plan to handle 3DS declined payments. Run revenue recovery on autopilot and let Chargebee figure out the right time to retry declined payments. Give your customers a head’s up of their failed payments by reaching out to them via email with a link to authenticate the payments — you have the power to decide the frequency of email reminders and the number of retries as well.
                            </p>
                        </div>
                        <div class="cp-article__actions">
                            <div class="cp-article__action">
                                <a href="/recurring-payments/dunning-management/" class="cp-link cp-link--icon">
                                    Learn how smart dunning works
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->
    <!-- -------------------------------------------------------------------
    Start: Article
    -------------------------------------------------------------------  -->
    <section class="cp-article cp-article--alt">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="cp-article__body">
                        <div class="cp-article__header">
                            <h2 class="cp-article__title" style="max-width: none; margin-bottom: 40px">
                                More of What Chargebee Can Do for You
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="cj-medias">
                       <a href="/for-europe/" class="cj-media cj-media--alc"> 
                          <div class="cj-media__action">
                             <div class="cp-link cp-link--icon">Chargebee for Europe</div>
                          </div>
                       </a>
                       <a href="https://www.chargebee.com/docs/eu-vat.html" class="cj-media cj-media--alc">
                          <div class="cj-media__action">
                             <div class="cp-link cp-link--icon">Learn how Chargebee handles EU VAT</div>
                          </div>
                       </a>
                       <a href="/saas-accounting-and-taxes/xero-accounting/" class="cj-media cj-media--alc">
                          <div class="cj-media__action">
                             <div class="cp-link cp-link--icon">Chargebee + Xero</div>
                          </div>
                       </a>
                       <a href="/security/#gdpr" class="cj-media cj-media--alc">
                          <div class="cj-media__action">
                             <div class="cp-link cp-link--icon">Chargebee’s GDPR commitment </div>
                          </div>
                       </a>
                       <a href="/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/" class="cj-media cj-media--alc">
                          <div class="cj-media__action">
                             <div class="cp-link cp-link--icon">Explore revenue recognition</div>
                          </div>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->


    </div>   
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Footer Section
    ==================================================================== -->
    <app-footer />
    </div>
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

    #cj-hsform{
        display: none;
    }
    @media (min-width: 992px){
        .cp-media__container {
            margin-bottom: 80px;
        }
        .cp-navs {
            margin-bottom: 120px;
        }
        .p-menu{
            visibility: hidden;
        }
        .p-menu--fixed{
            display: flex;
            visibility: visible;
        }
        .cp-hero__body{
            grid-column: 1 / -1;
        }
    }
    .media{
        max-width: 480px;
        margin-bottom: 50px;
    }
    .media .cp-article__title{
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        margin-bottom: 8px;
    }
    .media .cp-article__desc{
        max-width: 380px;
    }
    .cp-hero__desc{
        color: #ffffff;
    }
    .cp-hero__header{
        max-width: 640px;
    }
    .cp-hero__container--footer{
        padding-bottom: 100px;
    }
/*    @media (min-width: 992px){
        .cp-hero__container {
            padding-bottom: 200px;
        }
    }*/
    @media (max-width: 991px) and (min-width: 768px){
        .cp-hero__container {
            padding-bottom: 140px;
        }
        .cp-navs {
            margin-bottom: 80px;
        }
    }

    .cj-medias {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 24px;
}

@media (max-width: 767px) {
    .cj-medias {
        grid-template-columns: repeat(6, minmax(300px, 1fr));
        grid-template-columns: repeat(6, minmax(calc(100% - 30px), 1fr));
        grid-gap: 12px;
        padding-bottom: 15px;
        overflow: auto;
        margin-left: -15px;
        margin-right: -15px;
        padding: 0 10px 30px;
    }
    .cp-navs {
        margin-bottom: 80px;
    }
}

.cj-media {
    padding: 18px 24px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 10px 20px 0 rgba(90, 122, 190, 0.2);
    border: 1px solid rgba(90, 122, 190, 0.08);
    display: block;
    transition: .2s ease;
    position: relative;
}

.cj-media:hover,
.cj-media:focus {
    text-decoration: none;
    box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 10px 20px 0 rgba(90, 122, 190, 0.2);
}

.cj-media:hover:not(:last-child):after,
.cj-media:focus:not(:last-child):after {
    transform: translateX(0);
    opacity: 1;
}

.cj-media__header {
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
}

.cj-media__figure {
    margin-top: 0;
    margin-right: 16px;
}

.cj-media__figure>img {
    min-width: 24px;
}

.cj-media__title {
    color: #00000A;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    margin: 0;
    position: relative;
}

.cj-media__title:after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 10px;
    /*background: url(../images/home/jan-2019/arrow/arrow.svg) center/contain no-repeat;*/
    transform: translateX(-10px);
    transition: .2s ease;
    position: absolute;
    right: -30px;
    bottom: 3px;
}

.cj-media__subtitle {
    color: #00000A;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    margin-top: 0;
    margin-bottom: 8px;
}

.cj-media__desc {
    color: #242438;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 0;
}

.cj-media__subdesc {
    color: #242438;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0;
}

.cj-media--alc {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cj-media--flex {
    padding: 24px 32px;
    min-height: auto;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    overflow: hidden;
}

@media (max-width: 767px) {
    .cj-media--flex {
        margin-bottom: 24px;
    }
}

.cj-media--flex .cj-media__figure {
    margin-bottom: 0;
}

@media (max-width: 991px) {
    .cj-media--flex .cj-media__figure {
        margin-left: -16px;
        max-width: 70px;
    }
}

.cj-media--flex .cj-media__content {
    margin-left: 24px;
    margin-bottom: 0;
    flex: 1;
}

@media (max-width: 991px) {
    .cj-media--flex .cj-media__content {
        margin-left: 20px;
        margin-top: 0;
    }
}




.cj-glow {
  background-color: #ffffff;
  padding: 16px 24px;
  border-radius: 100px;
  box-shadow: 0 3px 0 0 rgba(90, 122, 190, 0.12);
  border: 1px solid rgba(90, 122, 190, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  max-width: 650px;
  margin: 0 auto 32px;
  transition: all .2s ease-out; }
  @media (max-width: 991px) {
    .cj-glow {
      display: block;
      text-align: center; } }
  @media (min-width: 992px) and (max-width: 1200px) {
    .cj-glow {
      max-width: 660px; } }
  .cj-glow:hover, .cj-glow:focus {
    text-decoration: none;
    color: #242438;
    box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 10px 20px 0 rgba(90, 122, 190, 0.2); }
  @media (max-width: 991px) {
    .cj-glow__icon {
      margin: 4px auto;
      display: inline-block; } }
  .cj-glow__content {
    color: #000ff0;
    margin-left: 24px; }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
