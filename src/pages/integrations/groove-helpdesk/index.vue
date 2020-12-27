<template>
    <div>
        <app-meta 
            :cb-title="'Groove Helpdesk - Integrations - Chargebee'" 
            :cb-desc="'Boost the productivity of your customer support agents by having the customer\'s subscription details displayed right within Groove.'" 
            :cb-url="'/integrations/groove-helpdesk/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <section class="container integration xero ff-acuminpro">
                <nav class="integration__breadcrumb">
                    <a href="/integrations/">Integrations</a>
                    /
                    <span>Groove</span>
                </nav>
                <section class="integration__right">
                    <h1>
                        Boost Your Customer Support Team's Productivity with Chargebee & Groove
                    </h1>
                    <!-- <h3 class="ff-acuminpro">
                        <div class="integration__author">
                            <img src="/static/website/version/images/sadhana.jpg" alt="author" />
                        </div>
                        Written by <a href="#">Sadhana Balaji</a>
                    </h3> -->
                    <div class="integration__intro">
                        <p>We all have our own set of productivity pet peeves.</p>

                        <p>And the one that will definitely have a special place in all of our lists is Tab Juggling, i.e., jumping from one tab to another to complete a single task.</p>
                        <br>
                        <p>While we're still working on ways to solve it for your other teams, we've come up with the perfect solution for your customer support team!</p>
                        <br>
                        <p>With the Chargebee-Groove integration, your custodians of support will be able to view the subscription details of the customer within the Groove app, right next to the corresponding support ticket.</p>
                        <br>
                        <p>Kill the extra tabs. Boost your productivity.</p>
                        <br>
                        <h2 class="ff-acuminpro">How to get started?</h2>
                        <br>
                        <p>Follow the steps <a href="/docs/groove.html">here</a> to get started with the integration.
                        <br>
                        </p>
                        <h2 class="ff-acuminpro">Note:</h2><br><p>The Chargebee - Groove integration is available only on Chargebee's Scale plan.</p>
                        <br>
                        <br>
                        
                        <p>Here's a quick look at what the integration lets you do:</p>

                    </div>
                    
                    
                </section>
                <section class="integration__leftmenu hidden-xs">
                    <div class="integration__logo hidden-xs">
                        <div class="integration__logo-box" style="background-color:#f8f8f8">
                            <img src="/static/website/version/images/integrations/groove/groove-logo.svg" alt="Groove" style="width: 90%;" />
                        </div>
                    </div>
                    <section class="integration__desc">
                        <p>
                            Groove is a simple helpdesk software that helps you to delight your online customers with awesome, personal support.
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                    <nav class="integration__nav hidden-xs">
                        <a href="/docs/groove.html">Documentation</a>
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
                                            <img src="/static/website/version/images/integrations/groove/gr1.png" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>
                                            View all the basic details of the corresponding customer in the Chargebee widget - including Addons, MRR, and CMRR (for upselling); Payment Due invoices and amount; specified Payment Method, etc. 
                                            <br><br>You can also use the "Request Payment Method" option to send an email to the customer with a link to update/add one.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="account-mapping">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/groove/gr2.png" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>If a customer has multiple subscriptions, you can view the MRR and CMRR of all their subscriptions side by side. <br><br>Want to view more details about the subscriptions? Click the "For more, visit Chargebee" to jump to the respective Customer details page directly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/groove/gr3.png" class="img-responsive" />
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
                                Visit <strong>Groove</strong> to learn more about setting up this integration.
                            </p>
                            <p>
                                Groove is a simple helpdesk software that helps you to delight your online customers with awesome, personal support.
                            </p>
                        </section>
                        <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                        
                    </section>
                    <div class="integration--row">
                    </div>
                </section>
                <!-- other screens except mobile -->
                
            </section>
            <!-- End Main Body Content -->
        </div>
        <app-footer />
    </div>
</template>

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
        methods: {

        },
        created() {

        },
        mounted() {
            $('.pr-tab__plan-inv').tooltip({
                'show': true,
                'placement': 'bottom'
            });
        }
    }
</script>