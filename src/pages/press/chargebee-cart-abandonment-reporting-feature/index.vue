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
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
      :cb-title="'Track abandoned carts and improve sales conversions using Chargebee’s cart abandonment reporting'" 
      :cb-desc="'Improve abandoned cart recovery rate and sales conversions with the help of Chargebee’s cart abandonment reporting feature. The feature does not just help track abandoned carts, the reporting is complemented by email notifications, to recover potentially lost revenue.'" 
      :cb-url="'/press/chargebee-cart-abandonment-reporting-feature/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="''"
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
        <!-- ===========================================================================
        Banner Part Start 
        ============================================================================ -->
        <section class="hero hero--invert" style="background-image: none; background-color: #1C1D2F; padding-top: 150px; padding-bottom: 40px">
             <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-8 col-md-offset-1"> 
                        <h1 style="color: #fff">
                            Improve Sales Conversions Against Checkout Drops With Chargebee’s Cart Abandonment Reporting
                        </h1>
                    </div>
                </div>
             </div>
        </section>
        <!-- ===========================================================================
        Banner Part End 
        ============================================================================ -->
        <section class="container">
            <div class="row">
                <div class="col-sm-7 col-md-6 col-md-offset-1">
                    <!-- ===============================================================
                    Top image Part Start 
                    ================================================================ -->   
                    <article class="cb-factor">
                        <img src="/static/website/version/images/press/card-abandonment/cb-card-abandonment.png" alt="" class="img-responsive">
                    </article>
                    <!-- ===============================================================
                    Top image Part Start 
                    ================================================================ --> 
                    <!-- ===============================================================
                    Content set 1 Part Start 
                    ================================================================ --> 
                    <article class="cb-factor" id="introduction">
                        <p class="cb-factor__desc">
                            Chargebee, a secure billing and subscription management solution, recently launched the ability to track abandoned carts, a remarketing feature that tracks and reports checkout failure. The abandoned cart reporting and recovery feature acts more than a mere nudge to buyers dropping a purchase during checkout. It aims to work as a recovery mechanism for potentially lost revenue.
                        </p>
                        <p class="cb-factor__desc">
                            When a customer adds items to the cart and leaves the page before completing the checkout or leaves a hosted page or checkout page unattended for sometime, it is counted as an abandoned cart. The global cart abandonment rate for Q3 of 2017 was <a href="https://blog.salecycle.com/featured/infographic-remarketing-report-q3-2017/" target="_blank">78.4%</a>, which is 1.5% more than the previous quarter, which means that more money is left on the table. Reasons for drops in checkout are plenty. These include technical glitches resulting in a drop in the checkout flow, closing the checkout tab by mistake, payment failures or declines, changing mind about the purchase due to potential hidden charges, or friction due to complex checkout flows. Understanding the primary drivers that lead to cart abandonment and following up on customers can help businesses increase sales conversion rate and establish better relationship with customers. 
                        </p>
                    </article>
                    <!-- ===============================================================
                    Content set 1 Part End 
                    ================================================================ -->
                    <!-- ===============================================================
                    Content set 2 Part Start 
                    ================================================================ --> 
                    <article class="cb-factor" id="abandoned-carts">
                        <h2 class="cb-factor__title">
                            Recover Abandoned Carts With Chargebee 
                        </h2>
                        <p class="cb-factor__desc">
                            The abandoned cart reporting in Chargebee is a comprehensive source for tracking lost revenue and dropped checkouts. The report includes details of the customer, product, and total value of the abandoned carts, which makes it easier to plan remarketing activities. The feature is complemented by abandoned cart email notifications or follow up emails to customers who abandoned their carts during a purchase, urging them to complete the purchase.
                        </p><br>
                        <p class="cb-factor__highlight">
                            <span style="color: #787882;">Checkout failure or a drop during checkout, also known as cart abandonment, is a common phenomenon. What makes cart abandonment so important is the fact that your potential customer showed an intent to buy, and dropped off during checkout due to some form of friction. Tracking this allows businesses to reorient their strategy and plan their next outreach accordingly. The abandoned cart email is one such way you can win back lost customers and boost potentially lost revenue</span> 
                            <br><br><strong>Nithin Rangarajan, Product Manager, Chargebee</strong>.
                        </p>
                        <p class="cb-factor__desc">
                            The results can be outstanding. SaaS doesn’t pay much attention to this metric, focusing on failed payments rather than failed checkouts, or in SaaS terms, checkout abandonment. As a way to plug up any holes in the revenue recovery pipeline, it can be surprisingly effective.
                        </p>
                    </article>
                    <!-- ===============================================================
                    Content set 2 Part End 
                    ================================================================ -->
                    <!-- ===============================================================
                    Content set 3 Part Start 
                    ================================================================ --> 
                    <article class="cb-factor" id="benefits">
                        <h2 class="cb-factor__title">
                            <span class="cb-idea-icon"></span> Benefits 
                        </h2>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Increase in Conversion Rate</div>
                                <div>
                                    The abandoned carts when recovered can increase sales and lead to better conversion rate. Abandoned Cart emails saw an open rate of <a href="https://www.klaviyo.com/marketing-resources/abandoned-cart-benchmarks" target="_blank">41.18%</a> and top 10 percent of companies are doing at least <a href="https://www.klaviyo.com/marketing-resources/abandoned-cart-benchmarks" target="_blank">three</a> times their average performance due to a higher recovery rate of the abandoned carts.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Undemanding Customization</div>
                                <div>
                                    Businesses can customize emails that are sent to the cart abandoners and can also send multiple <a href="https://www.chargebee.com/docs/email-notifications-v2.html#abandoned-carts-email-notifications" target="_blank">email notifications</a> to the customers. Multiple notifications can be scheduled to be sent to the customer at specific intervals varying from minutes, hours to days.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Unwritten Rule to Increase Sales</div>
                                <div>
                                    Cart abandonment emails are perfect trigger emails that can nudge the customer along the buyer’s journey until they become the end customer. Trigger mails not only have <a href="http://www.experian.com/assets/marketing-services/reports/transactional-email-report.pdf" target="_blank">eight times</a> higher open rates and click-through rates, but also manifold the revenue <a href="http://www.experian.com/assets/marketing-services/reports/transactional-email-report.pdf" target="_blank">six times</a>.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Build Customer Trust</div>
                                <div>
                                    By following cart abandoners through emails, businesses establish the fact that they value customers, are concerned about their experience and are willing to empathize and help them complete their checkout.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Ease of Use</div>
                                <div>
                                    Chargebee’s abandoned cart reporting feature eliminates the need for businesses to look out for other softwares with the same scope. Businesses need not deploy skilled programmers to execute this, since it is a straight-forward feature which can be implemented easily. 
                                </div>
                            </li>
                        </ul>
                    </article>
                    <!-- ===============================================================
                    Content set 3 Part End 
                    ================================================================ --> 
                </div>
                <!-- ===============================================================
                Content Part End
                ================================================================ --> 
                <!-- ===============================================================
                Nav Part Start 
                ================================================================ --> 
                <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 100px;">
                    <div id="affix-nav" class="cb-affix">
                        <ul class="nav cb-affix__list">
                            <li class="cb-affix__title">
                                Cart Abandonment Reporting
                            </li>
                            <li class="cb-affix__item active">
                                <a href="#introduction">
                                    Introduction
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#abandoned-carts">
                                    Recover abandoned carts with Chargebee
                                </a>
                            </li>
                            <li class="cb-affix__item"> 
                                <a href="#benefits">
                                    Benefits
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ===============================================================
                Nav Part End 
                ================================================================ --> 
            </div>
        </section>
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
        $('body').scrollspy({ target: '#affix-nav' })
        $('#affix-nav').affix({
            offset: {
              top: 400,
              bottom: function () {
                return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
            }
        }})
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
    .cb-factor__item-title{
        color: #212121;
        font-weight: bold;
        margin-bottom: 9px;
    }
    #ch-js-header-cloned{
        display: none;
    }
    @media (max-width: 767px){
        .affix{
            position: static!important;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->