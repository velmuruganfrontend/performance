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
      :cb-title="'More Referrals Means More Subscriptions | ReferralCandy + Chargebee'" 
      :cb-desc="'Build smart word-of-mouth marketing campaigns with Chargebee and ReferralCandy'" 
      :cb-url="'/integrations/referralcandy-referral-marketing/'" 
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
    <app-header :hasInvert="false" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <!-- Start Main Body Content -->
        <section class="container integration xero ff-acuminpro">
            <nav class="integration__breadcrumb">
                <a href="/integrations/">Integrations</a>
                /
                <span>ReferralCandy</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Build and Manage Smart Referral Marketing Campaigns for your Subscription Business
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/divya.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Divya</a>
                </h3> -->
                <div class="integration__intro">
                    <p>Customer acquisition through word-of-mouth referral campaigns has always been a winning strategy for subscription businesses. </p>
                    <br>
                    <p>Chargebee now makes it easier for you to launch your own referral marketing programs that can help you build an army of advocates, with appropriate fraud detection and validation.</p>
                    <br>
                    <p>
                        Engage and incentivize your advocates and earn valuable leads, with Chargebee’s integration with ReferralCandy.

                    </p>
                    <img class="img-responsive" src="/static/website/version/images/integrations/referralcandy/referralcandy-chargebee.png">
                </div>    
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/referralcandy/referralcandy-logo.png" alt="Referralcandy"  style="width: 80%" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        <a href="https://www.referralcandy.com/about" target="_blank">ReferralCandy</a> is a referral marketing tool that gets you more customers by incentivizing referrals.  
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="/docs/referralcandy.html" target="_blank">Documentation</a>
                    <a href="/company/terms/">Terms of Service</a>
                    <a href="/privacy/">Privacy Policy</a>
                    <a href="https://support.chargebee.com/">Support</a>
                    <a href="http://status.chargebee.com/">Status</a>
                </nav>
            </section>
            <div class="clearfix"></div>
            <section class="integration--row">
                <div class="cb-useguide__tab cb-useguide__tab-alt">
                    <div>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#tab1" role="tab" data-toggle="tab">Personalized Referral Campaigns</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" role="tab" data-toggle="tab">Simplified Referral Tracking</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab3" role="tab" data-toggle="tab">Automated Payouts</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="tab1">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/referralcandy/referralcandy-referral-widget.png" class="img-responsive"/>
                                    </div>
                                    <div class="col-sm-5 col-md-4">
                                        <h6>Build beautiful and personal referral campaigns in minutes</h6>
                                        <br>
                                        <p>Add a touch of you, in your referral campaigns. Build and customize your personalized referral campaign.</p>
                                        <p>
                                            Customize the look and functionality aligned with your brand, with personalized URLs, editable widgets that can be displayed as designed on the Hosted Thank You Page, and compatible across all devices. Send automatic email reminders in your own style to advocates to participate in the campaign.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/referralcandy/referral-metrics-tracking.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-5 col-md-4">
                                        <h6>Track and Optimize your Referral Campaigns</h6>
                                        <br>
                                        <p>
                                            Move from idea to solution and test channels that work well for you and your customers. Invite and onboard customers through email, or embed the widget on the website
                                        </p>
                                        <p>
                                            Optimize widget and track detailed metrics about performance. You can also track payouts with the integrated status reporting, to ensure that advocates are receiving credit for successful conversions
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab3">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/referralcandy/cb-payouts.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-5 col-md-4">
                                        <h6>Automate Payouts With Account Credits</h6>
                                        <br>
                                        <p>
                                            Tracking referrals and following up on payouts can be an arduous task. Simplify payouts of account credits with the integration. 
                                        </p>
                                        <p>
                                            Account credits are added to the advocate once the friend’s purchase is successful
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="integration--row  visible-xs">
                <!-- mobile only section -->
                <section class="integration__leftmenu clearfix">
                    <section class="integration__desc">
                        <p>
                            Visit <strong>Friendbuy</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Empower your customers to refer more people to your business, and boost your sales with Chargebee’s integration with Friendbuy.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                
            </section>
            <!-- other screens except mobile -->
            <div class="hidden-xs">
                <h2 class="integration__faqs__title">FAQs</h2>
                <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                    <section class="integration__faqs">
                        <ul class="faqlist">
                            <li class="active">
                                <a href="#apilimit" role="tab" data-toggle="tab">
                                    What pricing plan does the ReferralCandy Integration with Chargebee fall under?
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" role="tab" data-toggle="tab">
                                    How does the data flow between Chargebee and ReferralCandy?
                                </a>
                            </li>
                            <li>
                                <a href="#xero-sync" role="tab" data-toggle="tab">
                                    How are the referrals tracked?
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="apilimit" role="tabpanel" class="tab-pane active">
                        <h3>Pricing - Chargebee</h3>
                        <p>
                            The Chargebee+ReferralCandy referral integration is available on our Rise plan ($299) onwards.
                        </p>
                    </div>
                    <div id="pricing" role="tabpanel" class="tab-pane">
                        <h3>Data flow</h3>
                        <p>
                            A customer signs up and views the sharing details. Chargebee will show the share widget automatically in the hosted thank you page. Customer shares the referral URL with a friend(s). When the friend signs up with the Referral URL and receives a discount. On successful purchase, the referrer will receive the reward credits added to their Account (as account credits). It is worth noting that while referral URLs can be shared, referral codes cannot be shared between friends.
                        </p>
                    </div>
                    <div id="xero-sync" role="tabpanel" class="tab-pane">
                        <h3>Referrals</h3>
                        <p>
                            You can login to ReferralCandy and refer to the Referral Conversion report. 
                        </p>
                    </div>
                </section>
            </div>
        </section>
        <!-- End Main Body Content -->
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
        $('.pr-tab__plan-inv').tooltip({
            'show': true,
            'placement': 'bottom'
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
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
