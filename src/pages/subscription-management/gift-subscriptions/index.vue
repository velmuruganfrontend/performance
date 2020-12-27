<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer       =   App footer will add footer to the page.
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
        :cb-title="'Enable Gifting the Experience of your Subscription with Chargebee'" 
        :cb-desc="'Set up gift subscriptions for your business with Chargebee’s out-of-the-box solution. Let subscribers and non-subscribers gift your subscriptions and build yourself a larger audience to go after.'" 
        :cb-url="'/subscription-management/gift-subscriptions/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/gift.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/scripts/rellax.min.js'"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" :hasBasicHeader="false" :hasBackToCareers="false" />
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
                <section class="gt-section gt-section--hero gt-mB__m">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-1">
                                <div class="visible-xs gt-mT__s"></div>
                                <div class="visible-xs visible-sm gt-mT__xxs"></div>
                                <div class="hidden-xs gt-mT__l"></div>
                                <div class="hidden-xs gt-mT__xxs"></div>
        
                                <!-- =======================================================
                                Start: Section Article    
                                ======================================================== -->
                                <div class="gt-heroarticle gt-mB__s">
                                    <div class="gt-heroarticle__header">
                                        <h1 class="gt-heroarticle__title"><strong>Enable gift subscriptions <br> and Boost your customer <br> acquisition with Chargebee</strong></h1>
                                    </div>
        
                                    <div class="gt-heroarticle__footer">
                                        <div class="gt-heroarticle__actions">
                                            <a href="/trial-signup/" class="gt-heroarticle__anchor gt-btn gt-btn--arrow">
                                                <span>Sign up for free</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Section Article    
                                ======================================================== -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-5 col-sm-offset-7">
                                <div class="gt-section--hero__graphic">
                                    <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/banner-img.png">
                                </div>
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
                <section class="gt-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1">
                                <div class="visible-xs visible-sm gt-mT__s"></div>
                                <div class="gt-sectionarticle gt-mB__xs">
                                    <div class="gt-article__header">
                                        <div class="gt-article__subtitle">
                                            Wouldn’t it be awesome if receiving a gift was a year round experience - not just something you unwrap on your birthday?
                                        </div>
                                    </div>
        
                                    <div class="gt-article__content">
                                        <div class="gt-article__desc">
                                            Let your customers and prospects go beyond one-time gifts and share the experience of your subscriptions with friends and family.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-1">
                                <div class="gt-sectionarticle">
                                    <div class="gt-article__header">
                                        <div class="gt-article__title">
                                            <strong>Make it really hard for the recipient to say no</strong>
                                        </div>
                                    </div>
        
                                    <div class="gt-article__content">
                                        <div class="gt-article__desc">
                                            Give the recipient a taste of the experience you reserve for customers. The gift-recipient does not have to be the intangible, out-of-reach persona anymore. Automate welcome emails, reminders, offer emails and convert them right from within Chargebee.
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
                Start: Section -- C
                ====================================================================================== -->
                <section class="gt-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <div class="gt-sectionarticle text-center gt-mB__s">
                                    <div class="gt-sectionarticle__header">
                                        <div class="gt-article__title"><strong>Set up a clean gifting workflow</strong></div>
                                    </div>
        
                                    <div class="gt-sectionarticle__content">    
                                        <div class="gt-sectionarticle__desc">
                                            Reduce the steps and make it nifty. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-12">
        
                                <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/workflow.png" style="margin: 0 auto;"/>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                End: Section -- C
                ====================================================================================== -->
        
                <!-- =====================================================================================
                Start: Section -- D
                ====================================================================================== -->
                <section class="gt-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-sm-offset-1 col-md-4 col-md-offset-1">
                                <div class="gt-sectionarticle gt-mB__xs">
                                    <div class="gt-sectionarticle__header">
                                        <div class="gt-sectionarticle__title">
                                            <strong>And everything else that matters for a good gifting experience</strong> - We’ve built out-of-the-box
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-sm-7 col-sm-offset-1 col-md-6 col-md-offset-1">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="gt-features">
                                    <div class="gt-features__list">
                                        <div class="gt-feature">
                                            <div class="gt-feature__icon">
                                                <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/checkbox-marked-circle-outline.svg"/>
                                            </div>
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">Personalization</div>
                                                <div class="gt-feature__desc">The gifter can write a message, schedule it for that perfect occasion or send it out immediately.</div>
                                            </div>
                                        </div>
        
                                        <div class="gt-feature">
                                            <div class="gt-feature__icon">
                                                <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/checkbox-marked-circle-outline.svg"/>
                                            </div>
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">Guest Checkout</div>
                                                <div class="gt-feature__desc"><a href="/recurring-payments/checkout-experience/" class="gt-feature__link">Chargebee’s checkout</a> lets one-time gifters skip the hassle of new account creation and check out instantly.</div>
                                            </div>
                                        </div>
        
                                        <div class="gt-feature">
                                            <div class="gt-feature__icon">
                                                <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/checkbox-marked-circle-outline.svg"/>
                                            </div>
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">One-step Gift Claim</div>
                                                <div class="gt-feature__desc">Chargebee’s gift subscription delivers the ability to ‘claim the gift’ right to the recipients’ inboxes. No gift code. No extra steps to claim. No room for friction.</div>
                                            </div>
                                        </div>
        
                                        <div class="gt-feature">
                                            <div class="gt-feature__icon">
                                                <img class="img-responsive" src="/static/website/version/images/subscription-management/gift-subscriptions/checkbox-marked-circle-outline.svg"/>
                                            </div>
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">Do it Yourself Portal</div>
                                                <div class="gt-feature__desc"><a href="/subscription-management/customer-self-service-portal/" class="gt-feature__link">Self-serve portals</a> aren’t just for customers. Let recipients enjoy the benefits too.</div>
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
                End: Section -- D
                ====================================================================================== -->
        
                <!-- =====================================================================================
                Start: Section -- E
                ====================================================================================== -->
                <section class="gt-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 col-sm-offset-1 col-md-5 col-md-offset-1">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="gt-features">
                                    <div class="gt-features__subheading">
                                        Other Chargebee features that will let your subscription eCommerce business leverage gift subscriptions to the fullest!
                                    </div>
                                </div>
                                <!-- =======================================================
                                End: Features
                                ======================================================== -->
                            </div>
                        </div>
        
                        <div class="row">
                            <div class="col-sm-11 col-sm-offset-1 col-md-8 col-md-offset-1">
                                <!-- =======================================================
                                Start: Features
                                ======================================================== -->
                                <div class="gt-features">
                                    <div class="gt-features__list gt-features__list--horizontal">
                                        <div class="gt-feature">
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">Discount & coupon system</div>
                                                <div class="gt-feature__desc">Combined with gift subscriptions, the ways to run winning promotional campaigns are plenty. Seasonal discounts for gifters? Discounts to convert the recipient? Your creativity is your only limit.</div>
                                                <a class="gt-feature__link" href="/subscription-management/discount-management-system/">More on coupon management →</a>
                                            </div>
                                        </div>
        
                                        <div class="gt-feature">
                                            <div class="gt-feature__content">
                                                <div class="gt-feature__title">Order Management System</div>
                                                <div class="gt-feature__desc">Stay atop all operational inefficiencies. Imagine your billing system to be the one-stop source to manage orders, shipment status, and inventory. From ‘Gifted’ to ‘Received’ - Track it all.</div>
                                                <a class="gt-feature__link" href="/subscription-ecommerce/subscription-order-management/">More on order management →</a>
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
                
                <!-- =====================================================================================
                Start: Section -- F
                ====================================================================================== -->
                <section class="gt-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div class="gt-cta">
                                    <div class="gt-cta__header">
                                        <div class="gt-cta__title">
                                            Make gifting an enjoyable process. <br class="hidden-xs"> Set up gifting with Chargebee.
                                        </div>
                                    </div>
        
                                    <div class="gt-cta__footer">
                                        <div class="gt-cta__actions">
                                            <a href="/trial-signup/" class="gt-cta__anchor gt-btn gt-btn--arrow"><span>Sign up for free</span> </a>
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
    .affix {top: 60px; left: 0;}
    .affix-top {left: 0; position: absolute; visibility: hidden; opacity: 0;}
    .affix-bottom {position: absolute;  visibility: hidden; opacity: 0}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->