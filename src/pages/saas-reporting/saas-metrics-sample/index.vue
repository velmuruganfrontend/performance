<template>
    <div>
        <app-meta 
            :cb-title="'SaaS Metrics: Tailored metrics for your executive team - Chargebee'" 
            :cb-desc="'A Sample Of SaaS Metrics Analysis'" 
            :cb-url="'/saas-reporting/saas-metrics-sample/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/burger-menu.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/product.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="''" />
        <div class="cb-body pad-top-head-height">
            <!-- InstanceBeginEditable name="Page Content" -->  
            <section class="well no-round no-bor no-mar no-pad">
                <div class="container text-center block-space">
                    <h1 class="ProximaNova-Bold hr-line text-uppercase">SAAS Metrics</h1>
                    <p class="text-28 no-mar SourceSans-Light">Not just templatized reporting.<br>We deliver accurate, actionable metrics for your executive team.</p>
                </div>
            </section>

            <hr class="no-mar">

            <div class="container block-top-space">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-a.png" alt="Chargebee SaaS Metrics">
            </div>

            <hr class="clearfix">

            <div class="container block-top-space-sm">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-b.png" alt="Chargebee SaaS Metrics">
            </div>

            <hr class="clearfix">

            <div class="container block-top-space-sm">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-c.png" alt="Chargebee SaaS Metrics">
            </div>

            <hr class="clearfix">

            <div class="container block-top-space-sm">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-d.png" alt="Chargebee SaaS Metrics">
            </div>

            <hr class="clearfix">

            <div class="container block-top-space-sm">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-e.png" alt="Chargebee SaaS Metrics">
            </div>

            <hr class="clearfix">
            
            <div class="container block-top-space-sm">
                <img class="img-responsive" src="/static/website/version/images/saas-metrics/chargebee-saas-metrics-f.png" alt="Chargebee SaaS Metrics">
            </div>  
            <!-- InstanceEndEditable -->    
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
        methods: {}
    }
</script>