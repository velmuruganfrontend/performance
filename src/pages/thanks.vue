<template>
    <div>
        <app-meta 
            :cb-title="'Thank You - Chargebee'" 
            :cb-desc="'Chargebee - Affordable Subscription Billing & Recurring Billing Solution for online web apps.'" 
            :cb-url="'/thanks/'" 
            :cb-image="'/images/og-image.gif'"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <div class="cb-body">
            <header class="header clearfix hidden-xs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <h1 class="sr-only">Chargebee - Subscription Billing Solution</h1>
                        <a href="/" style="display:inline-block;margin-top:8px;">
                            <img src="/static/resources/brand/chargebee-logo-black.svg" alt="Chargebee" title="Chargebee" width="100">
                        </a>
                    </div>
                    <div class="navbar-right">
                        <a href="https://app.chargebee.com/login" class="btn btn-success btn-sm">Log in</a>
                    </div>
                </div>
            </header>
            <section class="block-space container text-center" style="margin-top:100px;">
                <h1 class="ProximaNova-Bold hr-line text-uppercase">Card Updated Successfully</h1>
                <p class="text-28 text-title block-space-sm">
                    Thanks for updating your credit card information.
                </p>
            </section>
        </div>
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