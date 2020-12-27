<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee + Active Campaign | Build marketing workflows for your subscription business'" 
            :cb-desc="'Build better marketing automation workflows by integrating ActiveCampaign with Chargebee'" 
            :cb-url="'/integrations/activecampaign/'" 
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
                    <span>Active Campaign</span>
                </nav>
                <section class="integration__right">
                    <h1>
                        Amp up your marketing automation in ActiveCampaign with data from Chargebee
                    </h1>
                    <div>

                    </div>
                    <div class="integration__intro">
                        <p>
                            <img src="/static/website/version/images/integrations/active-campaign/active-campaign-banner.png" alt="ActiveCampaign + Chargebee" class="img-responsive">
                        </p>
                        <br>
                        <p>
                            Rich data is the pathway to effective marketing. Go beyond customer data and include subscriptions, plan levels, orders, invoices and more to segment, target and deliver successful email campaigns.
                        </p>
                        <p>
                            Subscription info can be a treasure trove to help  develop the perfect marketing workflow on ActiveCampaign. With 15+data additional data points now at your disposal, you can provide relevant content to your customers and upsell, cross sell,  coach or even resurrect a lost customer!
                        </p>
                        <br>
                    </div>
                </section>
                <section class="integration__leftmenu hidden-xs">
                    <div class="integration__logo hidden-xs">
                        <div class="integration__logo-box" style="background-color:#f8f8f8">
                            <img src="/static/website/version/images/integrations/active-campaign/ac-logo.svg" alt="active-campaign" style="width: 80%;">
                        </div>
                    </div>
                    <section class="integration__desc">
                        <p>
                            Bring in subscription data from Chargebee into ActiveCampaign to automate more contextual marketing campaigns
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                    <nav class="integration__nav hidden-xs">
                        <a href="/pricing/">Pricing</a>
                        <a href="https://www.chargebee.com/docs/active-campaign.html">Documentation</a>
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
                                    <a href="#ready-for-marketing-teams" aria-controls="ruby" role="tab" data-toggle="tab">Give marketing automation a boost </a>
                                </li>
                                <li role="presentation">
                                    <a href="#perfect-for-sales-teams" aria-controls="python" role="tab" data-toggle="tab">No more stale subscriber data</a>
                                </li>
                                <li role="presentation">
                                    <a href="#built-for-support-teams" aria-controls="node" role="tab" data-toggle="tab">Easy Sync</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="ready-for-marketing-teams">
                                    <div class="row">
                                        
                                        <div class="col-sm-7">
                                            <h3 class="visible-xs" style="margin-bottom: 12px;">
                                                Give marketing automation a boost 
                                            </h3>
                                            <img src="/static/website/version/images/integrations/active-campaign/give-marketing-automation-a-boost.png" width="620" alt="Give marketing automation a boost" class="img-responsive"/>
                                        </div>
                                        <div class="col-sm-4">
                                            <p>
                                                Launch and execute automated campaigns with better segmentation. Go beyond geographic, demographic and psychographic details to reach your customers.
                                            </p>

                                            <p>
                                                <strong>Examples</strong>
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>Send pre-built workflows to customers on specific plans to prompt them to upgrade</p>
                                                </li> 
                                                <li>
                                                    <p>Target onboarding emails to subscribers who have just signed up</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="perfect-for-sales-teams">
                                    <div class="row">
                                        
                                        <div class="col-sm-7">
                                            <h3 class="visible-xs" style="margin-bottom: 12px;">
                                                No more stale subscriber data
                                            </h3>
                                            <img src="/static/website/version/images/integrations/active-campaign/no-more-stale-subscriber-data.png" width="620" alt="no-more-stale-subscriber-data" class="img-responsive"  />
                                        </div>
                                        <div class="col-sm-4">
                                            <p>
                                                Keep your mailing list current with new customer sign ups, billing info, cancellation reasons, MRR, trial status and more. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="built-for-support-teams">
                                    <div class="row">
                                        <div class="col-sm-7">
                                            <h3 class="visible-xs" style="margin-bottom: 12px;">
                                                Easy Sync
                                            </h3>
                                            <img src="/static/website/version/images/integrations/active-campaign/easy-sync.png" width="620" alt="Easy Sync" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4">
                                            <p>
                                                Update email lists with ease. Automatically sync customers in Chargebee to ActiveCampaign making sure that they are part of your carefully designed marketing workflow.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
