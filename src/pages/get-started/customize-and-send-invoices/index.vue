<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Customize, create and automate invoices'"
            :cb-desc="'Chargebee allows you to send recurring invoices that are automatically sent to your customers on a regular schedule.'"
            :cb-url="'/get-started/customize-and-send-invoices/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/7icj458wg9/font.css'"
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
            <div class="wistia_channel wistia_async_7icj458wg9 mode=inline" style="min-height:100vh;position:relative;width:100%;"></div>
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