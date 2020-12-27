<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Deliver a Frictionless Checkout Experience'"
            :cb-desc="'Give your customers a secure checkout experience with Chargebee\'s Checkout pages that are also PCI compliant.'"
            :cb-url="'/get-started/setup-checkout-page/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/biow6xqx6o/font.css'"
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
            <div class="wistia_channel wistia_async_biow6xqx6o mode=inline" style="min-height:100vh;position:relative;width:100%;"></div>
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