<template>
    <div>
        <app-meta 
            :cb-title="'Server Error - Chargebee'" 
            :cb-desc="'Affordable Subscription Billing Solution for online business apps.'" 
            :cb-url="'/500/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <section class="error-block block-space">
                    <div class="container text-center">
                        <div class="oh"><span>5</span><em></em><em></em></div>
                        <p class="text-44">Server Error</p>
                        <p class="text-32">Sorry, Please retry after sometime</p>
                    </div>
                </section>
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