<template>
    <div>
        <app-meta 
            :cb-title="'Permission Denied - Chargebee'" 
            :cb-desc="'Integrated with all leading Payment Gateways for online payment.'" 
            :cb-url="'/403/'" 
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
                        <div class="oh"><span>4</span><em></em><span>3</span></div>
                        <p class="text-44">Permission Denied</p>
                        <p class="text-32">Oops! You don't have the permission to access the page</p>
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