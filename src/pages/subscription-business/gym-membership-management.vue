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
        :cb-title="'Membership Management | Gyms & Fitness Centres'" 
        :cb-desc="'Chargebee\’s software for managing gym and fitness memberships helps you easily issue and manage payments, run promotions, offer free trials & much more.'" 
        :cb-url="'/subscription-business/gym-membership-management/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/webflow/css/normalize.css,/static/website/version/webflow/css/webflow.css,/static/website/version/webflow/css/chargebee-4e114d.webflow.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/webflow/js/webflow.js'"
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
        <div class="cb-body">
            <div class="w-section hero-banner">
              <div class="pad-top-head-height">      
                <div class="coupons-container w-container">
                  <div class="coupons hero-wrapper">
                    <h1 class="feature-header">MEMBERSHIP MANAGEMENT FOR GYMS AND FITNESS CENTRES</h1>
                    <h2 class="hero-header">Subscription Billing for your fitness business</h2>
                    <p class="hero-paragraph">You have a <em>lot</em> going on.
                      <br>Add to this keeping track of memberships, sending out renewal reminders, running promotional campaigns and keeping it all together!
                      <br>You don't need an internal IT team for all of this, you just need Chargebee.</p><a class="hero-button-ghost w-button" cn-mark-signup="true" href="/trial-signup/">GET STARTED FREE!</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="coupons-pocket">
              <div class="coupons-container w-container">
                <div class="w-row">
                  <div class="w-clearfix w-col w-col-6">
                    <div class="pocket-content w-clearfix">
                      <h2 class="coupons-pocket-heading">Accept payments with ease</h2>
                      <p class="coupons-pocket-paragraph">With Chargebee's hosted pages you can get started quickly and accept recurring or one time payments. Offer your customers different payment options like cards, bank transfers, PayPal or good old cash, and manage them all in one place.</p>
                    </div>
                  </div>
                  <div class="w-clearfix w-col w-col-6">
                    <div class="coupons-img pocket-content"></div><img class="image-border" src="/static/website/version/webflow/images/payment-methods.png" width="446">
                  </div>
                </div>
              </div>
            </div>
            <div class="coupons-pocket">
              <div class="coupons-container w-container">
                <div class="w-row">
                  <div class="w-clearfix w-col w-col-6">
                    <div class="coupons-img pocket-content"></div><img class="image-border" src="/static/website/version/webflow/images/create-plan.png" width="399">
                  </div>
                  <div class="w-clearfix w-col w-col-6">
                    <div class="pocket-content w-clearfix">
                      <h2 class="coupons-pocket-heading">Manage your subscriptions</h2>
                      <p class="coupons-pocket-paragraph">Creating a new subscription or updating existing ones is as simple as a click. Be it monthly or annual membership plans, let Chargebee's smart subscription engine do all the heavy-lifting for you. We make managing memberships as easy as a walk in the park!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="coupons-pocket">
              <div class="coupons-container w-container">
                <div class="w-row">
                  <div class="w-clearfix w-col w-col-6">
                    <div class="pocket-content w-clearfix">
                      <h2 class="coupons-pocket-heading">Offer promotions and discounts</h2>
                      <p class="coupons-pocket-paragraph">Launching a new centre and need to run a campaign? Want to give away discounts for the holidays? No matter what your campaign story is, running a promotion has never been this smooth. With Chargebee, customizing coupons characteristics (like duration, redemption limit) can all be done in one single dashboard.</p>
                    </div>
                  </div>
                  <div class="w-clearfix w-col w-col-6">
                    <div class="coupons-img pocket-content"><img src="/static/website/version/webflow/images/customer-portal-os.svg">
                    </div><img class="image-border" src="/static/website/version/webflow/images/multiple-tax.svg" width="347">
                  </div>
                </div>
              </div>
            </div>
            <div class="coupons-pocket">
              <div class="coupons-container w-container">
                <div class="w-row">
                  <div class="w-clearfix w-col w-col-6">
                    <div class="coupons-img pocket-content"></div><img class="image-border" src="/static/website/version/webflow/images/customer-portal.png" width="226">
                  </div>
                  <div class="w-clearfix w-col w-col-6">
                    <div class="pocket-content w-clearfix">
                      <h2 class="coupons-pocket-heading">Bundle packages that make sense for your business</h2>
                      <p class="coupons-pocket-paragraph">Considering offering 1-1 personal training services, or even selling fitness gear along with your membership plans?With Chargebee's flexible addon management system, it's effortless to package pricing bundles that you'd need. Handle all your up-selling and cross-selling edge cases, without breaking a sweat.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coupons-container w-container">
                <div class="w-row">
                  <div class="w-clearfix w-col w-col-6">
                    <div class="pocket-content w-clearfix">
                      <h2 class="coupons-pocket-heading">Acquire more new customers with trials</h2>
                      <p class="coupons-pocket-paragraph">Trial passes might be the best way to get your customers to fall in love with your fitness program. Card - No card - Paid or Free: No matter what your trial type, just set it up in Chargebee and manage extensions effectively.</p>
                    </div>
                  </div>
                  <div class="w-clearfix w-col w-col-6">
                    <div class="coupons-img pocket-content"><img src="/static/website/version/webflow/images/customer-portal-os.svg">
                    </div><img class="image-border" src="/static/website/version/webflow/images/quick-launch.png" width="347">
                  </div>
                </div>
              </div>
            </div>
            <div class="wep-pocket3">
              <div class="w-container wep-pocket-container">
                <div class="wep-cta-wrap">
                  <div class="wep-cta-text">Convinced yet?</div>
                  <p>You get your first $50K in invoices for FREE. Yes. No catches. No lock-ins. Nothing.</p><a class="w-button wep-cta-btn" cn-mark-signup="true" href="/trial-signup/">Give it a spin</a>
                </div>
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
a:hover,a:focus{
  text-decoration: none;
}
.wep-cta-btn:hover,.wep-cta-btn:focus{
  color: white;
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
