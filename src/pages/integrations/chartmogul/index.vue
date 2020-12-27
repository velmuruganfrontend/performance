<template>
    <div>
        <app-meta 
            :cb-title="'Subscription Business Metrics that Matter | Chargebee + ChartMogul'" 
            :cb-desc="'#'" 
            :cb-url="'/integrations/chartmogul/'" 
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
                    <span>ChartMogul</span>
                </nav>
                <section class="integration__right">
                    <h1>
                        Advanced SaaS Metrics and Growth Reporting Using Chargebee & ChartMogul
                    </h1>
                    <div>
                        
                    </div>
                    <div class="integration__intro">
                        <p>Connect your subscription billing data from Chargebee with ChartMogul, and analyze key SaaS metrics like MRR, churn rate, subscription lifetime value, and more.  </p>
                        <h2 style="margin-top: 40px;margin-bottom: 0px;">Use your subscription data to analyze your business and find new ways to grow.</h2>
                        <br>
                    
                        <p>Use the full-fledged integration between Chargebee and ChartMogul to get a real-time view of your business performance, and dig deep into subscription data.<br><br>
                        <br><br>
                        <p><img src="/static/website/version/images/integrations/chartmogul/chartmogul-chargebee.png" class="img-responsive"></p>
                    </div>
                </section>
                <section class="integration__leftmenu hidden-xs">
                    <div class="integration__logo hidden-xs">
                        <div class="integration__logo-box" style="background-color:#f8f8f8">
                            <img src="/static/website/version/images/integrations/chartmogul/chartmogul-logo.png" alt="ChartMogul" style="width: 90%;">
                        </div>
                    </div>
                    <section class="integration__desc">
                        <p>
                            ChartMogul consolidates your billing data from Chargebee and gives you powerful subscription analytics that help uncover critical insights about your subscription business. 
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                    <nav class="integration__nav hidden-xs">
                        <a href="/pricing/">Pricing</a>
                        <a href="https://help.chartmogul.com/hc/en-us/articles/212494865-How-to-connect-Chargebee-to-ChartMogul" target="_blank">Documentation</a>
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
                                    <a href="#streamline" aria-controls="ruby" role="tab" data-toggle="tab">Streamline Your Data Integration</a>
                                </li>
                                <li role="presentation">
                                    <a href="#bi-dv" aria-controls="python" role="tab" data-toggle="tab">Bring Your A-game in Business Intelligence and Data Visualization</a>
                                </li>
                                <li role="presentation">
                                    <a href="#consolidated-system" aria-controls="node" role="tab" data-toggle="tab">Set Up One Consolidated System of Record</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="streamline">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/chartmogul/data-integration.png" class="img-responsive"/>
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>Automatically sync your customers' subscriptions, plans, addons, transactions, and other payments-related data from Chargebee with your ChartMogul account.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="bi-dv">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/chartmogul/business-intelligence.png" class="img-responsive"  />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>Generate real-time, dynamic reports on Monthly Recurring Revenue (MRR), Churn Rates, Customer Lifetime Value (LTV), etc. Drill down into the data and perform Segmentation, Cohort analysis, Geo-mapping, and more on the fly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="consolidated-system">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <img src="/static/website/version/images/integrations/chartmogul/one-consolidated-system.gif" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-4 col-md-3">
                                            <p>Get additional integrations like Zapier and Clearbit to add more layers to your data, and aggregate them into a single place. This will also enable you to perform advanced data segmentation (e.g. filtering MRR by Sales representative, Churn by NPS score, etc.)</p>
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
                                Visit <strong>ChartMogul</strong> to learn more about setting up this integration.
                            </p>
                            <p>
                                ChartMogul is provided by a third-party and is governed by separate terms, privacy, and support documentation.
                            </p>
                        </section>
                        <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                    </section>

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
