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
      :cb-title="'Open Source Customer Portal - Chargebee'" 
      :cb-desc="'Open Source Customer Portal (My-Billing section) for self-service subscription management for customers of Chargebee.'" 
      :cb-url="'/open-source-customer-portal/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="false" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <!-- Start Contant Part -->
        <section>
            <div class="cb-cp-hero">
                <div class="container">
                    <div class="cb-cp-hero-text">
                        <h1>Open Source Plug-&-Play <br>Customer Portal for Subscription Businesses</h1>
                    </div>
                    <!-- <div><h4>A PHP DIY Kit for those who like to dabble with a bit of code & build their own customer experience.</h4></div> -->
                    <img src="/static/website/version/images/open-source/customer-portal/customer-portal-os.svg" alt="customer portal dashboard" class="img-responsive"> 
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cb-cp-contentpart">
                            <p>A PHP DIY Kit if you'd like to dabble with a bit of code & build your own customer experience.</p>
                            <div class="text-center mar-b-md">
                                <a href="https://github.com/chargebee/customer-portal-php" class="btn btn-sm btn-success btn-outline-success" target="_blank"><span style="font-size: 18px; margin-right: 6px; margin-top: -2px; display: inline-block;"></span>View source code</a>
                            </div>
                            <p>When customer portal is one of the major tools used by your customers to manage subscriptions, you’d want it to be self-sufficient. The portal should essentially handle your customer’s requirements round the clock. Apart from meeting your customer’s needs, a well-equipped customer portal can improve your numbers.</p>

                            <h3>Why the open source version?</h3> 
                            <p>Chargebee provides an out of the box customer portal that’s configurable and the portal's UI can be matched with that of your website. Since the level of customization would entirely depend on the business type, we thought the best option would be to give you the freedom to tweak the customer portal to suit your needs. For this reason, we’ve leveraged our API to provide you with the open source version of our customer portal.</p>

                            <h3>What are the benefits?</h3>
                            <p>Tailor-making your customer portal to make it more relevant to your business has multiple potential benefits. Here are a few:<p>
                            <div class="cb-cp-list">
                                <ul>
                                    <li>Increased revenue </li>
                                    <li>Reduced cost </li>
                                    <li>Reduced manual processing </li>
                                    <li>Enhanced customer empowerment </li>
                                    <li>Improved customer experience  </li>
                                </ul>
                            </div>
                            <div class="cb-cp-list">
                                <h3>Let’s look at some features that might be important for your business and why:</h3>
                                <ul>
                                    <li>
                                        <h5>Increase revenue with one time checkouts</h5>
                                        <p>If a customer has to approach you each time for making more purchases, that’s time wasted for your customer and a LOT of manual work for you. Supporting One Time Checkouts through the portal will not only reduce your workload but also open up a brand new 24/7 revenue flow.</p>
                                    </li>
                                    <li>
                                        <h5>Allow customers to take a break with ‘Pause Subscription’</h5>
                                        <p>So you have customers wanting to pause their subscriptions for a month or two. They’d have to contact your team each time, and they're not exactly pleased. Including a ‘Pause Subscription” option in the portal will automatically reduce customer service requests and the probability of customers cancelling due to the option being unavailable.</p>
                                    </li>
                                    <li>
                                        <h5>Bring 'em back faster with 'Reactivate Subscription'</h5>
                                        <p>If you often have cancelled customers returning, you’d want a “Reactivate Subscription” option in the portal. Contacting you for this would again mean more manual efforts from your team.</p>
                                        <div class="text-center mar-y-sm">
                                            <span class="hr-line-xs"></span>
                                            <div class="ff-merriweather"><em>Did you know?</em></div>
                                            <div class="text-muted">The open source version supports the “Reactivate Subscription” feature already.</div>
                                            <span class="hr-line-xs"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Display customer specific products with product profiling</h5>
                                        <p>Tailoring the products displayed for a customer based on what you know about them, can increase their happiness quotient. For instance, if you're offering consists of a wide range of products, and their availability varies based on the geographical location of the customer, you need to make sure you target customers with the right products. This can be done by restricting product information using product profiling.</p>
                                    </li>
                                    <li>
                                        <h5>Display offers and discounts on the customer portal </h5>
                                        <p>Offering discounts to encourage your customers to upgrade through the portal would increase your upsell rate. Apart from this, you could also target customers who’ve cancelled their subscriptions using discounts.</p>
                                        <p>Chargebee’s open source customer portal provides you with the flexibility to include any of these features and more. Have we piqued your interest? If yes, click <a href="https://github.com/chargebee/customer-portal-php" target="_blank">here</a> to explore.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Contant Part -->
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
    mounted() {}
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->

