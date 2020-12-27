<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Integrate with Payment Gateways'"
            :cb-desc="'Set up multiple payment gateways such as Stripe, Braintree and handle failed transactions gracefully for a seamless billing experience.'"
            :cb-url="'/get-started/setup-payment-gateway/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/4vo94k42um/font.css'"
            :cb-head-script="''"
            :cb-body-script="'https://fast.wistia.com/assets/external/channel.js'"
            :cb-has-noindex="true"/>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="fr-main">
            <div class="wistia_channel wistia_async_4vo94k42um mode=inline" style="min-height:100vh;position:relative;width:100%;"></div>
        </main>
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->

    </div>
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
============================================================================ -->
<script>
    import AppMeta from '~/components/AppMeta.vue';

    export default {
        components: {
            'app-meta': AppMeta
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->