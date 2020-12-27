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
      :cb-title="'Chargebee + Zendesk - Enable Customer Support teams with Subscription Data in one pane'" 
      :cb-desc="'Integrate Chargebee with your helpdesk to boost the productivity of your customer support agents by having the customer\'s subscription details displayed right within Zendesk.'" 
      :cb-url="'/integrations/zendesk-helpdesk/'" 
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
                <span>Zendesk</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Boost Your Customer Support Team's Productivity with Chargebee & Zendesk
                </h1>
                <!-- <h3 class="ff-acuminpro">
                    <div class="integration__author">
                        <img src="/static/website/version/images/sadhana.jpg" alt="author" />
                    </div>
                    Written by <a href="#">Sadhana Balaji</a>
                </h3> -->
                <div class="integration__intro">

                    <p>Tab Juggling - the infamous art of constantly leaping from one tab/app to the next, to complete a particular task.</p>

                    <p>One of the biggest productivity killers, besides cat memes. </p>
                    <br>
                    <p>And for a person who acts as the face of your company, and works just to make your customers smile a bit wider, the potential damage increases multifold.</p>
                    <br>
                    <p>Well, not anymore. </p>

                    <br>
                    <p>By integrating Chargebee with Zendesk, Inc., your custodians of support will have all the subscription details of the customer displayed within the Zendesk app, right next to the corresponding support ticket.</p>
                    
                    
                    <p>Additional tabs? What are they meant for, again?</p>
                    
                    <h2 class="ff-acuminpro">How to get started?</h2>
                    <br>
                    <p>Follow the steps <a href="https://www.zendesk.com/apps/chargebee/">here</a> to get started with the integration.</p>
                    
                    <h2 class="ff-acuminpro">Note:</h2><p>The Chargebee - Zendesk integration is available only on Chargebee's Scale plan.</p>
                    <br>
                    <br>

                    <p>Here's a quick look at what the integration lets you do:</p>


                </div>
                
                
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#f8f8f8">
                        <img src="/static/website/version/images/integrations/zendesk/zendesk-logo.svg" alt="Zendesk" style="width: 90%;" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        Zendesk offers a beautifully simple system for tracking, prioritizing, and solving customer support tickets.
                    </p>
                </section>
                <a href="https://www.zendesk.com/apps/chargebee/" class="btn btn-primary" target="_blank">Install Plugin</a>
                <nav class="integration__nav hidden-xs">
                
                    <a href="/pricing/">Pricing</a>
                    <a href="/company/terms/">Terms of Service</a>
                    <a href="/privacy/">Privacy Policy</a>
                    <a href="https://support.chargebee.com">Support</a>
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
                                <a href="#auto-sync" aria-controls="ruby" role="tab" data-toggle="tab">All the deets, neatly packed and presented</a>
                            </li>
                            <li role="presentation">
                                <a href="#account-mapping" aria-controls="python" role="tab" data-toggle="tab">Multiple subscriptions, zero clutter
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#accurate-reporting" aria-controls="node" role="tab" data-toggle="tab">Works just as well for new email addresses</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="auto-sync">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/zendesk/zn1.png" class="img-responsive"    />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>
                                        View all the basic details of the corresponding customer in the Chargebee widget - including Addons, MRR, and CMRR (for upselling); Payment Due invoices and amount; specified Payment Method, etc. 
                                        <br><br>You can also use the "Request Payment Method" option to send an email to the customer with a link to update/add one.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="account-mapping">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/zendesk/zn2.png" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>If a customer has multiple subscriptions, you can view the MRR and CMRR of all their subscriptions side by side. <br><br>Want to view more details about the subscriptions? Click the "For more, visit Chargebee" to jump to the respective Customer details page directly.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <img src="/static/website/version/images/integrations/zendesk/zn3.png" class="img-responsive"  />
                                    </div>
                                    <div class="col-sm-4 col-md-3">
                                        <p>It's not fair on our part to expect the customer to always raise a support ticket with the same email address, with which they had created the subscription. <br><br>And that's why Chargebee also uses a domain-based search to fetch and display all the subscriptions that belong to the particular domain.</p>
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
                            Visit <strong>Zendesk</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Zendesk offers a beautifully simple system for tracking, prioritizing, and solving customer support tickets.
                        </p>
                    </section>
                    <a href="https://www.zendesk.com/apps/chargebee/" class="btn btn-primary" target="_blank">Install Plugin</a>
                </section>
                <div class="integration--row">
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

