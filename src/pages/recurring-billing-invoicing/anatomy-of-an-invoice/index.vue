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
      :cb-title="'Anatomy of Invoice'" 
      :cb-desc="'Ever wondered what goes into an invoice? Here\'s an interactive tour to know your invoice better!'" 
      :cb-url="'/recurring-billing-invoicing/anatomy-of-an-invoice/'" 
      :cb-image="'/static/resources/og/recurring-billing-invoicing/anatomy-of-an-invoice.gif'"
      :cb-style="'/static/website/version/styles/anatomy-of-an-invoice.css'"
      :cb-head-script="''"
      :cb-body-script="'https://static.buffer.com/js/button.js,/static/website/version/scripts/anatomy-of-an-invoice.js'"
      :cb-has-noindex="false"
      :cb-has-viewport="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <div class="hide-overflow">
            <div class="gradient"></div>
            <div class="header">
                <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/Chargebee-logo.svg"><span class="header-text">Chargebee is a billing and invoice app that works with gateways to enable your subscription business.</span>
            </div>
            <div class="intro">
                <div class="title">
                    <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/Group.svg" alt="">
                </div>
                <div class="intro-content">
                    <p>Sleek, simple, exhaustive - Chargebee&rsquo;s invoices are one of a kind. Check out our interactive invoice to know why we make the best invoices in town.</p>
                    <button id="start-exploring">Start Exploring</button>
                </div>
            </div>
            <div class="main">
                <div class="row clearfix">
                    <div class='column col-sm-6' id='a1-logo'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/logo.svg" alt="">
                        <div class="address">
                            <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/address.svg" alt="">
                        </div>
                    </div>
                    <div class='col-sm-3'></div>
                    <div class='column col-sm-3' id='a2-invoice'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/invoice.svg" alt="">
                    </div>
                </div>
                <div class="row clearfix">
                    <div class='column col-sm-8' id='a3-billedto'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/new-billing-slice-3.svg" alt="">
                    </div>
                    <div class='column col-sm-4' id='a4-subscription'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/subscription.svg" alt="">
                    </div>
                </div>
                <div class="row clearfix">
                    <div class='column col-sm-12' id='a5-table-head'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/new-01.svg" alt="">
                    </div>
                </div>
                <div class="row clearfix">
                    <div class='column col-sm-7' id='a6-table-coupon'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/new-02.svg" alt="">
                    </div>
                    <div class='column col-sm-5' id='a7-table-footer'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/new-03.svg" alt="">
                    </div>
                </div>
                <div class="row clearfix">
                    <div class='column col-sm-8' id='a8-payment-detail'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/payment-detail.svg" alt="">
                    </div>
                </div>
                <div class="row clearfix">
                    <div class='column col-sm-6' id='a9-notes'>
                        <img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/notes.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="perspective"></div>
            <div class="content-card a1-logo">
                <p class="content-card-title"> Make your invoices look good</p>
                <p> Add your business’ logo - The Organization Address appears right below, to add authenticity.</p>
                <a href="#" class="display-next-card">Next : Invoice Title and Details
        &rarr;</a>
            </div>
            <div class="content-card a2-invoice">
                <p class="content-card-title">Add an invoice title to differentiate your tax and retail invoices.</p>
                <p> We also stack neatly the details of invoice number, date, amount, and the status of payment under the invoice title.</p>
                <a href="#" class="display-next-card">Next : Shipping and Billing Addresses &rarr;</a>
            </div>
            <div class="content-card a3-billedto">
                <p class="content-card-title">You also have the option to have different addresses for billing and shipping.</p>
                <p> Also, the billing address option comes in handy when your tax rates are destination-based.</p>
                <a href="#" class="display-next-card">Next : Subscription details &rarr;</a>
            </div>
            <div class="content-card a4-subscription">
                <p class="content-card-title">Don't leave them guessing.</p>
                <p>Indicate what subscription they're paying for, the billing period, and when they can expect the next invoice.</p>
                <a href="#" class="display-next-card">Next : Line item details &rarr;</a>
            </div>
            <div class="content-card a5-table-head">
                <p class="content-card-title">Lay down details of your customers' purchase.</p>
                <p>Items purchased, their quantities, unit price, and the total value - in one simple, scannable section. No more support queries about invoice discrepancies.</p>
                <a href="#" class="display-next-card">Next : Coupons applied on the sale &rarr;</a>
            </div>
            <div class="content-card a6-table-coupon">
                <p class="content-card-title">What happened to the coupon offers your customer availed? Tell them!</p>
                <a href="#" class="display-next-card"> Next : Taxes collected on sale &rarr;</a>
            </div>
            <div class="content-card a7-table-footer">
                <p class="content-card-title">Be transparent about your taxes - provide a clear break-up of the taxes charged.</p>
                <a href="#" class="display-next-card">Next : Details of payment
        &rarr;</a>
            </div>
            <div class="content-card a8-payment-detail">
                <p class="content-card-title"> Don't miss out on the small but important details.</p>
                <p>Chargebee adds a neat little note on the amount charged, the date, and how the payment was received</p>
                <a href="#" class="display-next-card">Next : Customizable notes &rarr;</a>
            </div>
            <div class="content-card a9-notes">
                <p class="content-card-title">Love personalizing your customer communications?</p>
                <p> You have the option to add a note for each invoice that goes out to your customers.</p>
            </div>
            <div class="footer">
                <span>share some love</span>
                <a target="new" href="http://twitter.com/intent/tweet?text=What%20goes%20into%20an%20Invoice%3F%20Check%20out%20this%20interactive%20invoice%20by%20%40chargebee%20https%3A%2F%2Fwww.chargebee.com%2Fanatomy-of-an-invoice%2F"><img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/twitter.png" alt="" /></a>
                <a target="new" href="https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2Fwww.chargebee.com%2Fanatomy-of-an-invoice%2F&picture=http%3A%2F%2Fwww.insert-image-share-url-here.jpg&name=What%20goes%20into%20an%20Invoice%3F&caption=%20&description=Check%20out%20this%20interactive%20invoice%20by%20%40chargebee%20&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F"><img src="/static/website/version/images/recurring-billing/anatomy-of-an-invoice/facebook.png" alt="" /></a>
                <!-- <a target="new" href="http://bufferapp.com/add" class="buffer-add-button" data-text="Sleek, simple, exhaustive - Chargebee’s invoice." data-url="https:&#x2F;&#x2F;www.chargebee.com" data-count="none" ><img src="img/share.png" alt="" /></a> -->
            </div>
            <div class="mobile">
                The interactive invoice design is only for web.
            </div>
            <div class="hint">
                Click on a tile to know more about them
            </div>
            <a href="#" class="back-icon">Click to Go Back</a>
        </div>
    </div>
    <!-- ===================================================================
    End: Body Section
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
  
  export default {
    components: {
      'app-meta': AppMeta
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


