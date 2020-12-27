<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'The RevOps Intervention'"
            :cb-desc="'The RevOps Intervention is a virtual summit on revenue operations strategies, hacks and lessons that you can apply to your SaaS business today to maximize revenue.'"
            :cb-url="'/revops-intervention/sessions/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/unxuh3ulon/font.css'"
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
            <div class="wistia_channel wistia_async_unxuh3ulon mode=inline" style="min-height:100vh;position:relative;width:100%;"></div>
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
