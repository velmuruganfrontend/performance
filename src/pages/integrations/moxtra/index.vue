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
        :cb-title="'Moxtra - Chargebee'" 
        :cb-desc="'Use Moxtra and Chargebee for easy Collaboration with your customers & Company'" 
        :cb-url="'/integrations/moxtra/'" 
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
                <span>Moxtra</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Moxtra + Chargebee = Easy Collaboration with your Customers and your Company
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/prasanth-kothari.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Prasanth Kothari</a>
                </h3> -->
                <div class="integration__intro">
                    <h2>How many cloud apps does it take to run your business? </h2>

                    <br>2? 10? 75? Lost track, already?

                    <p>NetSkope published a <a href="https://www.netskope.com/blog/september-2016-cloud-report-43-7-percent-cloud-malware-ransomware-delivery-vehicles/" target="_blank">report</a> in Sept 2016 that states - “Average cloud apps per enterprise increased to 977 worldwide this quarter”.</p>
                    <p>This means that we are shifting from one app notification to another, from one email to another, from one tab to another, bordering on a digital ADHD. </p>
                    <p>And for your SaaS, this also means losing track of your customer’s subscription notifications.</p>
                    <p>Suddenly you find your productivity taking a hit. You wished you could organize, communicate and collaborate with your team, your customers, your partners - EASILY and ALL IN ONE PLACE.</p>
                    <p>We have a fix. </p>
                    <p>
                    Moxtra, a cloud collaboration service, integrated with Chargebee, so you can stay up to date with events that take place in Chargebee and create the notifications as actionables in your Moxtra binder.
                    </p>
                    <p>
                    With this collaboration, merchants can receive notifications of any actions or events that take place in their Chargebee account. Communication within your team and with your customers is possible through chats, document sharing, to-do lists, and meetings.
                    </p>
                </div>
                <br><br>
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#017aed">
                        <img src="/static/website/version/images/integrations/moxtra/moxtra-logo.png" alt="Moxtra" style="width: 90%;" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Moxtra is the collaboration companion that works the way teams do: flexibly and simply, in real-time or anytime.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                <a href="/docs/moxtra.html">Documentation</a>
                    <a href="/pricing/">Pricing</a>
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
                                <a href="#auto-sync" aria-controls="ruby" role="tab" data-toggle="tab">Connect, Communicate, and Collaborate</a>
                            </li>
                            <li role="presentation">
                                <a href="#account-mapping" aria-controls="python" role="tab" data-toggle="tab">Be the Captain of your Ship</a>
                            </li>
                            <li role="presentation">
                                <a href="#accurate-reporting" aria-controls="node" role="tab" data-toggle="tab">Increase Customer Acquisition and Retention</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/moxtra/moxtra-integration.png" class="img-responsive" width="550" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Go from notification to solution within minutes. </p>

                                        <p>Notify your team about all billing and subscription related events directly using a Moxtra binder, to send messages, annotate and sign documents, jump into a meeting and allow screen-sharing to and from any device. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="account-mapping">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/moxtra/moxtra-subscription-created.png" class="img-responsive" width="550" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Track new subscriptions using this integration. As soon as a customer subscribes, a notification is sent to the team’s workspace and the entire customer support team becomes aware of this event. </p>

                                        <p>Anyone from this team can be assigned to help onboard this customer and collect initial feedback. This feedback can then be routed to the team so everyone is up to date.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/moxtra/moxtra-Customer.png" class="img-responsive" width="500" />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>Smoothen the process of customer onboarding and follow-up.The interaction with the customer about their onboarding can happen using the Moxtra power messenger, or through a <a href="https://chrome.google.com/webstore/detail/meet-extension/gcihackglhkfinndffhemefinhlmagfe?hl=en" target="_blank">Moxtra Meet</a>.</p>
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
                            Visit <strong>Moxtra</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Moxtra is the collaboration companion that works the way teams do: flexibly and simply, in real-time or anytime.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                <div class="integration--row">
                    
                </div>
                </section>
            </section>
            <!-- other screens except mobile -->
            
        <!-- End Main Body Content -->  ​
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
