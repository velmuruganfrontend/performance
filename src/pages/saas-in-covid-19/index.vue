<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Saas in a COVID-19 World'"
            :cb-desc="'A collection of videos to try and provide the SaaS world with certain directions during this unwelcomed and unprecedented phase. Subscribe for future updates!'"
            :cb-url="'/saas-in-covid-19/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/n6w2nzsi67/font.css'"
            :cb-head-script="''"
            :cb-body-script="'https://fast.wistia.com/assets/external/channel.js'"
            :cb-has-noindex="false"/>
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
            <div class="wistia_channel wistia_async_n6w2nzsi67 mode=inline" style="min-height:100vh;position:relative;width:100%;"></div>
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