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
      :cb-title="'Use Chargebee + Zapier to connect & automate your subscription business'" 
      :cb-desc="'Create Zaps to automate your subscription business workflow by connecting Chargebee with 400+ popular apps that Zapier integrates with.'" 
      :cb-url="'/integrations/zapier/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css'"
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
            <section class="container integration xero">
                <nav class="integration__breadcrumb">
                    <a href="/integrations/">Integrations</a>
                /
                <span>Zapier</span>
            </nav>
                <section class="integration__right">
                    <h1>
                        Automate your way to subscription success
                    </h1>
                    <div class="integration__intro">
                        <img class="img-responsive" alt="chargebee-zapier-subscription-automation" src="/static/website/version/images/integrations/zapier/zapier-chargebee.png">
                        <br><br>
                        <p>
                            <strong>
                            What would you like to automate today?
                            </strong>
                        </p>
                        <p><em>
                            Set up a meeting with a subscriber on Google Calendar? Send a ‘Thank You’ card’? Follow up on an NPS survey? Send an SMS to a new subscriber?
                        </em></p>
                        <br>
                        <p>With Zapier, we got you covered. Set up automation workflows and logic to help you do tasks based on subscription, customer and payment data. Power up the apps you love with a booster shot from Chargebee </p>
                        <br>
                        <p>Create Zaps that automate your workflow by integrating Chargebee with other apps that your business uses. Zapier provides a simple drag-and-drop interface that integrates with 1000 + web services. Choose from an exhaustive list of cloud based apps, and build the automation workflow that works for you</p>
                        <br>
                        <p>With a range of triggers and actions now supported, a whole new world of subscription automation is at your fingertips</p>
                    </div>    
                </section>
                <section class="integration__leftmenu hidden-xs">
                    <div class="integration__logo hidden-xs">
                        <div class="integration__logo-box" style="background-color:#fff; border: 1px solid #eee;">
                            <img src="/static/website/version/images/integrations/icon/zapier.svg" alt="zapier" />
                        </div>
                    </div>
                    <section class="integration__desc">
                        <p>
                            Zapier lets you connect Chargebee with 1000+ web apps and services
                        </p>
                    </section>
                    <a href="https://zapier.com/apps/chargebee/integrations" class="btn btn-primary">View the Zapbook</a>
                    <nav class="integration__nav hidden-xs">
                        <a href="/pricing/">Pricing</a>
                        <a href="https://www.chargebee.com/docs/zapier.html">Documentation</a>
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
                                    <a href="#tab1" role="tab" data-toggle="tab">Connect to Anything</a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab2" role="tab" data-toggle="tab">Build Your Workflow Logic</a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab3" role="tab" data-toggle="tab">No Coding needed</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="tab1">
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <img alt="connect-1000+ apps-subscription-integrations" src="/static/website/version/images/integrations/zapier/connect-to-anything.png" class="img-responsive" width="750" />
                                        </div>
                                        <div class="col-sm-4">
                                            <h4 class="visible-xs">Connect to Anything</h4>
                                            <p>Now you can connect Chargebee to virtually any app you’re already using. So now you can do things like turn new subscription in Chargebee into a lead in SugarCRM or turn a Typeform sign up into a subscriber in Chargebee. With 1000+ apps on Zapier, the combinations are endless.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab2">
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <img alt="custom-subscription-workflow-logic" src="/static/website/version/images/integrations/zapier/build-your-workflow-logic.png" class="img-responsive"  width="650" />
                                        </div>
                                        <div class="col-sm-4">
                                            <h4 class="visible-xs" style="margin-top: 20px;">Build Your Workflow Logic</h4>
                                            <p>We get it. Your business is unique and so are your workflows. You deserve total control over how customer and subscriber information flows. You and your team needs the  ability take actions based on conditions and logic predefined in a reliable and timely manner</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab3">
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <img alt="automate-workflow-zero-dev" src="/static/website/version/images/integrations/zapier/zapier-no-code.png" class="img-responsive" width="650" />
                                        </div>
                                        <div class="col-sm-4">
                                            <h4 class="visible-xs" style="margin-top: 20px;">No Coding needed</h4>
                                            <p>There is really no point in reinventing the wheel. Quickly whip up together an automation workflow and connect with cloud applications that are essential to your tech stack. Forget about developing or working with APIs; just concentrate on the process that you want to build</p>
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
                                Visit <strong>Zapier</strong> to learn more about setting up this integration.
                            </p>
                            <p>
                                Create Zaps that automate your workflow by integrating Chargebee with other apps that your business uses. Zapier provides a simple drag-and-drop interface that integrates with 1000 + web services. Choose from an exhaustive list of cloud based apps, and build the automation workflow that works for you.
                            </p>
                        </section>
                        <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                    </section>
                    
                </section>
                <!-- other screens except mobile -->
                <div class="hidden-xs" style="margin-top: 120px;">
                    <h2 class="integration__faqs__title">FAQs</h2>
                    <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                        <section class="integration__faqs">
                            <ul class="faqlist">
                                <li class="active">
                                    <a href="#apilimit" role="tab" data-toggle="tab">Do I need a paid account in Zapier to create Chargebee related zaps?</a>
                                </li>
                                <li>
                                    <a href="#pricing" role="tab" data-toggle="tab">Which triggers are supported?</a>
                                </li>
                                <li>
                                    <a href="#searches" role="tab" data-toggle="tab">What actions are supported?</a>
                                </li>
                                <li>
                                    <a href="#actions3" role="tab" data-toggle="tab">How frequently does Zapier sync with Chargebee?</a>
                                </li>
                                <li>
                                    <a href="#actions4" role="tab" data-toggle="tab">What are the supported searches?</a>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                        <div id="apilimit" role="tabpanel" class="tab-pane active">
                            <p>No. Chargebee is available to users under the 'Free' plan in Zapier as well.</p>
                        </div>
                        <div id="pricing" role="tabpanel" class="tab-pane">
                            <p><strong style="color: rgba(0,0,0,0.54);">New Customer</strong> <br> <em>Triggers when a customer is created.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Customer Details Updates</strong> <br> <em>Triggers when customer details such as first name, last name, email, billing address, etc., are updated.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">New Payment Method</strong> <br> <em>Triggers when a payment method is added.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Payment Method Updates</strong> <br> <em>Triggers when a payment method is updated.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Subscription Pause:</strong> <br> <em>Triggers when a subscription is paused.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Subscription Resumption:</strong> <br> <em>Triggers when a paused subscription is resumed.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Subscription Cancellation Scheduled</strong> <br> <em>Triggers when a subscription is scheduled for cancellation.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Card Expiration</strong> <br> <em>Triggers when a credit card expires.</em></p><br>

                            <p>Read about <a href="https://www.chargebee.com/docs/zapier.html">more triggers here</a></p>
                        </div>
                        <div id="searches" role="tabpanel" class="tab-pane">
                            <h6 style="font-size: 16px; font-weight: bold; line-height: 24px;">The Chargebee - Zapier integration supports multiple actions. A few of them are as follows</h6><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Create Customer</strong> <br> <em>Creates a new customer in Chargebee.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Update Customer</strong> <br> <em>Updates customer details in Chargebee.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Create Subscription</strong> <br> <em>Creates a subscription in Chargebee.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Update Subscription</strong> <br> <em>Updates a subscription in Chargebee.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Record Offline Payment for an Invoice</strong> <br> <em>Records an offline payment for unpaid invoices.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Change Next Billing Date</strong> <br> <em>Updates next billing date of a subscription.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Pause Subscription</strong> <br> <em>Pauses a subscription in Chargebee.</em></p><br>
                            <p><strong style="color: rgba(0,0,0,0.54);">Resume Subscription</strong> <br> <em>Resumes a paused subscription in Chargebee.</em></p><br>

                            <p>Read about <a href="https://www.chargebee.com/docs/zapier.html">more triggers here</a></p>
                        </div>
                        <div id="actions3" role="tabpanel" class="tab-pane">
                            <p>Chargebee syncs in real time with Zapier. Though the Zaps are triggered based on the price plan you are subscribed to in Zapier.</p>
                        </div>
                        <div id="actions4" role="tabpanel" class="tab-pane">
                            <p><strong style="color: rgba(0,0,0,0.54);">Find Customer</strong></p>
                            <p>Lookup an existing customer.</p>
                            <p>Search fields: customer Id, email_id, company</p>
                        </div>
                    </section>
                </div>
            </section>
            <!-- End Main Body Content -->
        </div>
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
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->