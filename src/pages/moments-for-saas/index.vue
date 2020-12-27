<template>
    <div>
        <app-meta 
            :cb-title="'Seize the recurring moments of truth at checkout | Chargebee'" 
            :cb-desc="'Don’t let customers drop off at their biggest moments of truth - in your Checkout page, when they are ready to pay for your service. '" 
            :cb-url="'/moments-for-saas/'" 
            :cb-image="'/static/resources/og/moments-for-saas/og.png'"
            :cb-style="'/static/website/version/styles/moments-splash.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"
            :cb-region-list="''"
            :cb-region-url="''" />
        <app-header :hasInvert="true" />
        <script src="https://js.chargebee.com/v2/chargebee.js"></script>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <section class="ms-hero">
            <div class="ms-hero__container align-screen-center">
                <div class="ms-hero__body">
                    <div class="ms-hero__header">
                        <p class="ms-hero__desc">
                            You’ve worked hard to <br>bring your future customer so far.
                        </p>
                        <h1 class="ms-hero__title">
                            Now Seize That <br><span class="ms-hero__highlight">Moment of Truth</span>
                        </h1>
                    </div>
                    <div class="ms-hero__actions">
                        <div class="ms-hero__action">
                            <a href="/trial-signup/" class="ms-btn">Sign up for free</a>
                        </div>
                        <div class="ms-hero__action">
                            <a href="/schedule-a-demo/" class="ms-btn ms-btn--ghost ms-btn--ghost-primary">Schedule a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="cp-hero__footer hidden-xs hidden-sm">
            <span class="cp-hero__footer--goto goToArticle">Learn more</span>
        </div>
        <!-- ====================================================================
        End: Website Hero
        ===================================================================== --> 
        <!-- ====================================================================
        Start: Media 
        ===================================================================== -->
        <section class="ms-media">
            <div class="ms-media__container">
                <div class="ms-media__title">
                    You’ve <br class="hidden-xs">only got <br class="hidden-xs">8 seconds <br class="hidden-xs">to impress <br class="hidden-xs">your customer.
                </div>
                <div class="ms-media__content">
                    <p class="ms-media__desc">
                        Your customers’ journey is filled with a miscellany of intense moments. And the longest one is between the credit card in their wallet and your checkout page. Are you ready to seize these moments? Or just let them slip?
                    </p>
                    <p class="ms-media__desc">
                        Chargebee Moments lets you capture the most critical moments — from the point of sign-up, the moment of purchase, and all the way through to the time of upgrade.
                    </p>
                    <p class="ms-media__desc">
                        Customize a checkout and self-service experience that captures the moment of truth in your customers’ buying journey. Turn points of friction into moments of Wow, with Chargebee Moments.
                    </p>
                </div>
            </div>
        </section>
        <!-- ====================================================================
        End: Media 
        ===================================================================== -->
        <!-- ====================================================================
        Start: Article 
        ===================================================================== -->
        <section class="ms-article">
            <div class="container">
                <div class="row">  
                    <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                        <div class="ms-article__header">
                            <div class="ms-article__label">
                                Chargebee.js for Checkout
                            </div>
                            <div class="ms-article__title">
                                Imagining the Perfect <br class="hidden-xs">Checkout Already? Bring It to Life
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-8 col-sm-offset-2 col-md-11 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-5">
                                 <div class="ms-article__body">
                                    <div class="ms-article__desc">
                                        Tailor your checkout page the way you like. And offload security and PCI compliance to Chargebee. Chargebee.js lets you use hosted Fields and Components. You customize the look and feel, and Chargebee handles the tokenization wizardry. 
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="cd-panel">
                                    <div class="cd-panel-border"><span></span><span></span></div>
                                    <div class="cd-box theme1" id="card-component"></div>
                                    <div class="cd-panel-border"><span></span><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 col-md-offset-1 col-lg-3 col-lg-offset-1 hidden-xs hidden-sm">
                                <img src="/static/website/version/images/product/common/try-it-yourself.svg" class="img-responsive" alt="Try it yourself" />
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
                </div>
            </div>
        </section>
        <!-- ====================================================================
        End: Article 
        ===================================================================== -->
        <!-- ====================================================================
        Start: Article 
        ===================================================================== -->
        <section class="ms-article" with_in_this_section style="padding-bottom:0;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-offset-2 col-sm-8 col-md-4 col-md-offset-1">
                        <div move_this>
                            <div class="ms-article__figure">
                                <img src="/static/website/version/images/product/self-serve-widgets.svg" class="img-responsive" alt="customer self serve portal" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-0 col-sm-offset-2 col-sm-8">
                        <div class="ms-article__header">
                            <div class="ms-article__label">
                                Self-serve Widgets
                            </div>
                            <div class="ms-article__title">
                                Mix-match Your Dream Portal? <br class="visible-lg">Pick the Powers You Need
                            </div>
                        </div>
                        <div class="ms-article__body">
                            <div class="ms-article__desc">
                                <div move_here></div>
                                Why build a customer self-service portal from scratch? Retrofit self-service widgets into your existing Customer Portal. Give your customers just the powers you’d like, within your own “my accounts” section. Custom experiences and minimal dev effort. All while maintaining your brand consistency.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ====================================================================
        End: Article 
        ===================================================================== -->
        <!-- ====================================================================
        Start: Article 
        ===================================================================== -->
        <section class="ms-browser">
            <div class="ms-browser__header">
                <div class="ms-browser__toolbar">
                    <span class="ms-browser__toolbar--close tool"></span>
                    <span class="ms-browser__toolbar--minimize tool"></span>
                    <span class="ms-browser__toolbar--maximize tool"></span>
                    <span class="ms-browser__toolbar--tab"></span>
                </div>
            </div>
            <div class="ms-browser__body">
                <div class="ms-browser__screen">
                    <div class="ms-service">
                        <div class="ms-service__header">
                            <div class="ms-article__title">
                                Self-serve Widgets
                            </div>
                            <div class="ms-article__label">
                                Embed just the functionality you need on your Customer Portal.
                            </div>
                        </div>
                        <div class="ms-service__body">
                            <a href="javascript:void(0)" open_subscription_details class="ms-article__action">
                                <span>Edit Subscription Details</span>
                                <span class="ms-link ms-link--icon">See demo</span>
                            </a>
                            <a href="javascript:void(0)" open_manage_payments class="ms-article__action">
                                <span>Manage Payment Methods</span>
                                <span class="ms-link ms-link--icon">See demo</span>
                            </a>
                            <a href="javascript:void(0)" open_billing_history class="ms-article__action">
                                <span>View Billing History</span>
                                <span class="ms-link ms-link--icon">See demo</span>
                            </a>
                            <a href="javascript:void(0)" open_manage_addresses class="ms-article__action">
                                <span>Manage Addresses</span>
                                <span class="ms-link ms-link--icon">See demo</span>
                            </a>
                            <a href="javascript:void(0)" open_account_info class="ms-article__action">
                                <span>Manage Account Information</span>
                                <span class="ms-link ms-link--icon">See demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ====================================================================
        End: Article 
        ===================================================================== -->
        <!-- ====================================================================
        Start: Article 
        ===================================================================== -->
        <section class="ms-article ms-article--alt" style="padding: 0;">
            <div class="container">
                <div class="row ms-flex__align--bottom">
                    <div class="col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2 ms-flex__margin">
                        <div class="ms-article__header">
                            <div class="ms-article__label">
                                Off-the-shelf Checkout & Self-serve Portal
                            </div>
                            <div class="ms-article__title">
                                No Dev Time? Try Our <br class="hidden-xs">Off-the-shelf Options.
                            </div>
                        </div>
                        <div class="ms-article__body">
                            <div class="ms-article__desc">
                                Get up and running with the code-free, secure Checkout & self-service portal in under a minute. Get an off-the-shelf portal designed for the best conversions, without tying up any engineering and design resource.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-md-offset-0 col-sm-8 col-sm-offset-2">
                        <div class="ms-article__figure">
                            <img src="/static/website/version/images/product/off-the-shelf-checkout.png" class="img-responsive" width="600" alt="ready made checkout page" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ====================================================================
        End: Article 
        ===================================================================== -->

        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="ms-footer container">
            <div class="col-sm-10 col-sm-offset-1">
                <div class="ms-footer__container">
                    <!-- <div class="ms-footer__label">
                        Start Crafting Yours Now.
                    </div> -->
                    <div class="ms-footer__title">
                        13,000 Unique Customer Moments Crafted. Start Crafting Yours Now.
                    </div>
                    <div class="ms-footer__actions">
                        <!-- <div class="ms-footer__action">
                            <a href="/trial-signup/" class="ms-btn ms-btn--primary">Sign up for free</a>
                        </div> -->
                        <div class="ms-footer__action">
                            <a href="/saas-checkout-self-serve-portal/" class="ms-btn ms-btn--ghost">Learn more about Moments</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Footer
        -------------------------------------------------------------------  -->
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
        }
    }
</script>
<style type="text/css" media="screen">
    #ch-js-header-cloned{
        display: none;
    }
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
    @media (min-width: 992px) {
        .cd-styl-contain{
            display: flex;            
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