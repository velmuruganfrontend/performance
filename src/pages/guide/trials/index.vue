<template>
    <div>
        <app-meta 
            :cb-title="'Trials - Guides - Chargebee'" 
            :cb-desc="'#'" 
            :cb-url="'/guide/trials/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===========================================================================================
            Content Part Start 
            ============================================================================================ -->
            <main class="l-main">
                <section class="l-main__banner" style="padding-top: 120px; padding-bottom: 60px;">
                    <section class="no-round no-bor no-mar no-pad">
                        <div class="container block-space text-center block-space-btm-xs">
                            <img src="/static/website/version/images/guides/trials.png" class="img-responsive block-mar-auto">
                        </div>
                    </section>
                    <div class="container block-space text-15 ">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 block-trials">
                                <h1 class="ProximaNova-Bold">Experiment with Trials</h1>
                                <p class="guide-subtitle">Trials are undoubtedly the best way to make your prospects fall in love with your product.
                                    Short, long, paid, free, with a credit card or without a credit card! You just can’t ignore trials.
                                So read on to understand about the different possible types of trial models for a SaaS product and how Chargebee helps you implement all of them! </p>
                                
                                
                                <div class="block-plan">
                                    <div class="block-plan-text">
                                        <h4><a href="/guide/trials/free-trial-with-freemium-plans/">Free Trial with Freemium Plans</a></h4>
                                        <p>Offer a paid plan as a free trial, with a freemium model price structure, and without a credit card requirement.</p>
                                    </div>
                                    <div class="block-plan-arrow">
                                        <a href="/guide/trials/free-trial-with-freemium-plans/"  style="text-align: center;">Learn How</a>
                                    </div>
                                </div>

                                <div class="block-plan">
                                    <div class="block-plan-text">
                                        <h4><a href="/guide/trials/free-trial-with-freemium-plans-and-a-usage-limit/">Free Trial with Freemium Plans and a Usage Limit</a></h4>
                                        <p>Offer a paid plan as a free trial, with a freemium model pricing structure and a usage limit, without a credit card requirement.</p>
                                    </div>
                                    <div class="block-plan-arrow">
                                        <a href="/guide/trials/free-trial-with-freemium-plans-and-a-usage-limit/"  style="text-align: center;">Learn How</a>
                                    </div>
                                </div>

                                <div class="block-plan">
                                    <div class="block-plan-text">
                                        <h4><a href="/guide/trials/free-trial-with-premium-plans/">Free Trial with Premium Plans</a></h4>
                                        <p>Offer a paid plan as a free trial, without a credit card requirement.</p>
                                    </div>
                                    <div class="block-plan-arrow">
                                        <a href="/guide/trials/free-trial-with-premium-plans/" style="text-align: center;">Learn How</a>
                                    </div>
                                </div>

                                <!-- <div class="block-plan">
                                    <div class="block-plan-text">
                                        <h4>Free Plan with a Premium Opt-in Trial</h4>
                                        <p>Learn how to offer a free plan with a premium opt-in trial</p>
                                    </div>
                                    <div class="block-plan-arrow">
                                        <a href="/guide/trials/signup-without-a-credit-card/"><i class="fa fa-arrow-right"></i> Read More</a>
                                    </div>
                                </div> -->

                            </div>
                        </div>
                    </div>
                </section>
            </main>            
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

        }
    }
</script>