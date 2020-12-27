<template>
    <div>
        <app-meta 
            :cb-title="'Thank You - Chargebee'" 
            :cb-desc="'Chargebee - Affordable Subscription Billing & Recurring Billing Solution for online web apps.'" 
            :cb-url="'/thank-you-enterprise/'" 
            :cb-image="'/images/og-image.gif'"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'//www.googleadservices.com/pagead/conversion.js'"
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
                <h1 class="ProximaNova-Bold">Thank you! We'd be in touch shortly.</h1>
                <p class="text-28 text-title block-space-sm">
                    <a href="/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix">Take me back to Chargebee</a></p>
            </section>

            <!-- ===================================================================================
            NoScript -- Start
            ==================================================================================== -->
            <noscript>
                <div style="display:inline;">
                    <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/979719580/?label=7aXpCIzFl3AQnKuV0wM&amp;guid=ON&amp;script=0" />
                </div>
            </noscript>
            <!-- ===================================================================================
            NoScript -- End
            ==================================================================================== -->
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
        methods: {},
        mounted() {
            /* <![CDATA[ */
            var google_conversion_id = 979719580;
            var google_conversion_language = "en";
            var google_conversion_format = "3";
            var google_conversion_color = "ffffff";
            var google_conversion_label = "7aXpCIzFl3AQnKuV0wM";
            var google_remarketing_only = false;
            /* ]]> */
        }
    }
</script>