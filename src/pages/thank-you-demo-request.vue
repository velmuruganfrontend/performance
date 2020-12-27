<template>
    <div>
        <app-meta 
            :cb-title="'Thank You - Chargebee'" 
            :cb-desc="'Chargebee - Affordable Subscription Billing & Recurring Billing Solution for online web apps.'" 
            :cb-url="'/thank-you-demo-request/'" 
            :cb-image="'/images/og-image.gif'"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'//www.googleadservices.com/pagead/conversion.js'"
            :cb-has-noindex="true" />
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
                <h1 class="ProximaNova-Bold">Thank you!</h1>
                <p class="text-24" style="line-height: 28px; color: rgba(0, 0, 0, 0.6);">Someone from our team will get in touch with you ASAP</p>
                <p class="text-28 text-title block-space-sm">
                    <a href="/" class="btn btn-flat" style="border-bottom: 0; font-weight: 500">Back to Chargebee</a></p>
            </section>
            
            <!-- ===================================================================================
            NoScript -- Start
            ==================================================================================== -->
            <noscript>
                <div style="display:inline;">
                    <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/979719580/?label=Kay5CNHWsHAQnKuV0wM&amp;guid=ON&amp;script=0" />
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
            var google_conversion_label = "Kay5CNHWsHAQnKuV0wM";
            var google_remarketing_only = false;
            /* ]]> */


            // capterra_tracker code start
            // var capterra_vkey = '6a10cd5a8826facdd2fe4868c4d18ca4',
            // capterra_vid = '2092486',
            // capterra_prefix = (('https:' == document.location.protocol) ? 'https://ct.capterra.com' : 'http://ct.capterra.com');

            // (function() {
            //     var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
            //     ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
            //     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
            // })();
            // capterra_tracker code end
        }
    }
</script>