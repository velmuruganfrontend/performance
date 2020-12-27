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
      :cb-title="'Chargebee and Slack Integration: Never Miss Out on Subscription Alerts'" 
      :cb-desc="'Track all your subscriptions in Slack, and engage with your customers. Collaboration made easier with two of your favorite apps - Chargebee and Slack'" 
      :cb-url="'/integrations/slack-integration/'" 
      :cb-image="'/static/resources/og/integrations/slack-chargebee.png'"
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
                <span>Slack</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Stay on top of your subscriptions and engage with your customers, seamlessly.
                </h1>
                <div class="integration__intro">
                    <p>Don’t miss out on another subscription notification in Chargebee. Keep those alerts coming in through Slack. Chargebee’s integration with Slack can keep help you organize your subscription and payment alerts and subsequent follow-ups.</p>
                    <br>
                    <p>
                        <img src="/static/website/version/images/integrations/slack/slack-chargebee.png" class="img-responsive" />
                    </p>
                </div>
            </section>

            <section class="integration--row  visible-xs">
                <!-- mobile only section -->
                <section class="clearfix" style="text-align: center;">
                    <div>
                        <a href="#cb-int-step">
                             <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
                        </a>
                    </div>
                </section>
            </section>

            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/slack/slack-logo.svg" alt="Freshdesk" style="width: 80%;" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Never miss an alert related to your subscriptions and payments, thanks to Chargebee's integration with Slack
                    </p>
                </section>
                <a href="#cb-int-step">
                    <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
                </a>

                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <!-- <a href="https://apps.freshdesk.com/chargebee/">Documentation</a> -->
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
                                <a href="#engage-customers" aria-controls="ruby" role="tab" data-toggle="tab">
                                    Engage with and retain customers
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#be-notified" aria-controls="python" role="tab" data-toggle="tab">
                                    Be notified. All the time. 
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#track-churn" aria-controls="node" role="tab" data-toggle="tab">
                                    Track that churn and act upon it
                                </a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="engage-customers">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/slack/engage-retain-customers.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>
                                            Notify your team about subscription and payments related events from Chargebee directly in Slack. And have relevant teams engage with your customers, within seconds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="be-notified">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/slack/be-notified.png" class="img-responsive" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p style="margin-top: 20px;">
                                            Track new subscriptions using this integration. Onboard customers and follow up on payments by selecting relevant notification preferences including when a subscription is creation or cancelled, when a payment succeeds or fails, and when the first invoice generated for customer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="track-churn">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/slack/track-churn.png" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>
                                            Payments failed? Invoice not generated? Subscription cancelled? Go from notification to solution within minutes. Stay on top of voluntary and involuntary churn, and accelerate growth, with prompt notifications and relevant action.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="integration--step" id="cb-int-step">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                        <div class="cb-int-steps">
                            <h6>It takes just two steps to connect your Chargebee account with Slack.</h6>
                            <ol>
                                <li>
                                    Log into Chargebee and navigate to <strong>Settings > Third Party Integrations > Slack</strong>
                                </li>
                                 <li>
                                    Click <strong>Connect</strong> to integrate
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <!-- other screens except mobile -->
            
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
