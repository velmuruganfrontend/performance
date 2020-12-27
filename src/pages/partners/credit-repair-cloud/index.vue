<template>
    <div class="body">
        <app-meta 
            :cb-title="'Implement Price Optimization for Subscription Businesses | Chargebee'" 
            :cb-desc="'Find the pricing sweet spot for your subscription business with easy to implement price optimization solutions. Launch & experiment in minutes not months.'" 
            :cb-url="'/partners/credit-repair-cloud/'" 
            :cb-image="''"
            :cb-style="''"
            :cb-head-script="''"
            :cb-body-script="''"
			:disable-bootstrap-css="false"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" :hasBasicHeader="true" />
        <div class="sb-body">
            <!-- ===================================================================
            Start: Hero
            ==================================================================== -->
            <div class="sb-row">
                <div class="sb-hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="/static/website/version/images/home/stripe/dashboard@2x.png" class="img-responsive" alt="" />
                            </div>
                            <div class="col-sm-8 col-sm-offset-1 col-md-offset-0 col-md-6">
                                <div class="sb-title">
                                    We no longer support Credit Repair Cloud
                                </div>
                                <div class="sb-desc">
                                    Please check with the CRC team about your options.
                                </div>
                                <a href="https://www.creditrepaircloud.com/" target="_blank"><img src="/static/website/version/images/partners/credit-repair-cloud.svg" width="240" class="img-responsive" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: Hero
            ==================================================================== -->
        </div>
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader
        },
        methods: {

        },
        mounted() {
            
        }
    }
</script>
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    .sb-body {
        padding-top: 120px;
    }
    .sb-body a,.sb-body a:hover,.sb-body a:focus,.sb-body a:active{
        text-decoration: none;
        outline: none;
    }
    .sb-title {
        font-size: 24px;
        line-height: 1.5;
        font-weight: 700;
        margin-bottom: 16px;
        margin-top: 50px;
    }
    .sb-desc{
        font-size: 18px;
        margin-bottom: 40px;
    }
    @media (min-width: 768px) {
        .sb-title {
            font-size: 36px;
            line-height: 46px;
        }
    }
    @media (min-width: 992px) {
        .sb-title {
            margin-top: 0;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->