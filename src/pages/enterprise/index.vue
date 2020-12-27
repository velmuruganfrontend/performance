<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee for Enterprise'" 
            :cb-desc="'Scaling subscriptions is hard. Chargebee provides the infrastructure you need to scale at a rapid pace.'" 
            :cb-url="'/enterprise/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/typeform.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->  
                <section class="well no-round no-bor no-mar no-pad" style="display: none;">
                    <div class="container text-center block-space">
                        <h1 class="ProximaNova-Bold hr-line text-uppercase">Enterprise</h1>
                    </div>
                </section>
                <div class="container block-space">        
                    <div class="typeform-widget cb-tf--space" data-url="https://chargebee.typeform.com/to/wEJipg" data-text="Enterprise Form"></div>
                </div>
                <div style="text-align:center; margin:20px;">
                    <a href="/privacy/" title="Privacy Policy">Privacy Policy</a>
                </div>
                <!-- InstanceEndEditable --> 
            </div>   
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
<style type="text/css">
    .cb-tf--space{
            width:100%;
            height:600px;
    }

    @media only screen and (max-width: 767px){
        .cb-tf--space{
                height:400px;
        }
    }
    #footer{display:none;}
</style>