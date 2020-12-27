<template>
    <div>
        <app-meta 
            :cb-title="'Freshdesk Helpdesk - Integrations - Chargebee'" 
            :cb-desc="'Boost the productivity of your customer support agents by having the customer\'s subscription details displayed right within Freshdesk.'" 
            :cb-url="'/integrations/freshdesk-helpdesk/'" 
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
                    <span>Freshdesk</span>
                </nav>
                <section class="integration__right">
                    <h1>
                        Boost Your Customer Support Team's Productivity with Chargebee & Freshdesk
                    </h1>
                    <div class="integration__intro">
                        <p>Ask your customer support heroes to list down their productivity killers, and we bet that this one will definitely make it to the list - leaping from one tab to the next, in order to gather the necessary information to address a customer's query.</p>
                        <br>
                        <p>And we've come up with just the right solution.</p>
                        <br>
                        <p>With the Chargebee Freshplug installed, you'll have all the subscription details of the particular customer neatly displayed right next to the corresponding support ticket on the Freshdesk app.</p>
                        <br>
                        <p>No more tab juggling. Focus on your customer with no distractions whatsoever.</p>
                        <h2 class="ff-acuminpro">How to get started?</h2>
                            <br>
                            <p>Follow the steps <a href="https://apps.freshdesk.com/chargebee/">here</a> to get started with the integration.
                        <br>
                        <h2 class="ff-acuminpro">Note:</h2><p>The Chargebee - Freshdesk integration is available only  Chargebee's Scale plan and above.</p>
                        <br>
                        <p>Here's a quick look at what the integration lets you do:</p>
                    </div>
                </section>

                <section class="integration__leftmenu hidden-xs">
                    <div class="integration__logo hidden-xs">
                        <div class="integration__logo-box" style="background-color:#f8f8f8">
                            <img src="/static/website/version/images/integrations/freshdesk/freshdesk-logo.png" alt="Freshdesk" style="width: 80%;" />
                        </div>
                    </div>
                    <section class="integration__desc">
                        <p>
                            Freshdesk makes customer happiness refreshingly easy, by enabling you to deliver exceptional customer service.
                        </p>
                    </section>
                    <a href="https://apps.freshdesk.com/chargebee/" class="btn btn-primary" target="_blank">Install Plugin</a>
                    <nav class="integration__nav hidden-xs">
                        <a href="/pricing/">Pricing</a>
                        <a href="https://apps.freshdesk.com/chargebee/">Documentation</a>
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
                                            <img src="/static/website/version/images/integrations/freshdesk/fd1.png" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>View all the basic details of the corresponding customer in the Chargebee widget - including Addons, MRR, and CMRR (for upselling); Payment Due invoices and amount; specified Payment Method, etc.</p><br>
                                            <p>You can also use the "Request Payment Method" option to send an email to the customer with a link to update/add one.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="account-mapping">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/freshdesk/fd2.png" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p style="margin-top: 20px;">If a customer has multiple subscriptions, you can view the MRR and CMRR of all their subscriptions side by side.</p><br>

                                            <p> Want to view more details about the subscriptions? Click the "For more, visit Chargebee" to jump to the respective Customer details page directly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="accurate-reporting">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/freshdesk/fd3.png" class="img-responsive"  />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>It's not fair on our part to expect the customer to always raise a support ticket with the same email address, with which they had created the subscription.</p> <br>
                                            <p>And that's why Chargebee also uses a domain-based search to fetch and display all the subscriptions that belong to the particular domain.</p>
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
                                Visit <strong>Freshdesk</strong> to learn more about setting up this integration.
                            </p>
                            <p>
                                Freshdesk makes customer happiness refreshingly easy, by enabling you to deliver exceptional customer service.
                            </p>
                        </section>
                        <a href="https://apps.freshdesk.com/chargebee/" class="btn btn-primary" target="_blank">Install Plugin</a>
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